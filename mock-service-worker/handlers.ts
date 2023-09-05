import { uuid } from "core/utils";
import { DefaultBodyType, MockedRequest, RestHandler, rest } from "msw";

type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  createdOn: string;
  modifiedOn: string | null;
};
const defaultTodoList: [string, Todo][] = [
  [
    "1",
    {
      id: "1",
      text: "Learn NextJs",
      isCompleted: false,
      createdOn: new Date().toISOString(),
      modifiedOn: null,
    },
  ],
  [
    "2",
    {
      id: "2",
      text: "Learn SWR",
      isCompleted: false,
      createdOn: new Date().toISOString(),
      modifiedOn: null,
    },
  ],
];
const storageTodoValue = localStorage.getItem("todoList");
const storageTodoList: [string, Todo][] = JSON.parse(storageTodoValue || "[]");

const todoList: Map<string, Todo> = new Map(
  storageTodoValue ? storageTodoList : defaultTodoList
);

function syncStorage() {
  localStorage.setItem(
    "todoList",
    JSON.stringify(Array.from(todoList.entries()))
  );
}

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get("/api/todo", (req, res, ctx) => {
    const items = Array.from(todoList.values());
    return res(
      ctx.delay("real"),
      ctx.json({ items, totalCount: items.length })
    );
  }),
  rest.post("/api/todo", async (req, res, ctx) => {
    const { text } = await req.json();
    const isValid =
      typeof text === "string" &&
      text.trim().length > 0 &&
      text.trim().length < 100;
    if (!isValid) {
      return res(
        ctx.status(400),
        ctx.json({
          message:
            "JSON body must include a text property between 1 and 100 characters long",
        })
      );
    }
    const newTodo: Todo = {
      id: uuid(),
      text,
      isCompleted: false,
      createdOn: new Date().toISOString(),
      modifiedOn: null,
    };
    todoList.set(newTodo.id, newTodo);
    syncStorage();
    return res(ctx.json(newTodo));
  }),
  rest.delete("/api/todo/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (typeof id !== "string") {
      return res(ctx.status(400), ctx.json({ message: "id must be a string" }));
    }
    if (!todoList.has(id)) {
      return res(
        ctx.status(404),
        ctx.json({ message: `Todo with id ${id} not found` })
      );
    }
    todoList.delete(id);
    syncStorage();
    return res(ctx.json({ message: `Todo with id ${id} deleted` }));
  }),
  rest.put("/api/todo/:id", async (req, res, ctx) => {
    const { id } = req.params;
    if (typeof id !== "string") {
      return res(ctx.status(400), ctx.json({ message: "id must be a string" }));
    }
    if (!todoList.has(id)) {
      return res(
        ctx.status(404),
        ctx.json({ message: `Todo with id ${id} not found` })
      );
    }
    const { text, isCompleted } = (await req.json()) as Partial<Todo>;
    if (typeof text !== "string") {
      return res(
        ctx.status(400),
        ctx.json({ message: "text must be a string" })
      );
    }
    if (typeof isCompleted !== "boolean") {
      return res(
        ctx.status(400),
        ctx.json({ message: "isCompleted must be a boolean" })
      );
    }
    const todo = todoList.get(id);
    if (!todo) {
      return res(
        ctx.status(404),
        ctx.json({ message: `Todo with id ${id} not found` })
      );
    }
    const updatedTodo = {
      ...todo,
      text,
      isCompleted,
      modifiedOn: new Date().toISOString(),
    };
    todoList.set(id, updatedTodo);
    syncStorage();
    return res(ctx.json(updatedTodo));
  }),
];
