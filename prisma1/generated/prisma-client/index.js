"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "WorkDay",
    embedded: false
  },
  {
    name: "Establishment",
    embedded: false
  },
  {
    name: "Employee",
    embedded: false
  },
  {
    name: "WorkHour",
    embedded: false
  },
  {
    name: "OrderPad",
    embedded: false
  },
  {
    name: "Expense",
    embedded: false
  },
  {
    name: "ExpenseItem",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Income",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "CheckData",
    embedded: false
  },
  {
    name: "Bill",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "Table",
    embedded: false
  },
  {
    name: "TableData",
    embedded: false
  },
  {
    name: "OrderItem",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "NCM",
    embedded: false
  },
  {
    name: "Client",
    embedded: false
  },
  {
    name: "BillStatus",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  },
  {
    name: "WeekDay",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  //endpoint: `https://fecha-conta-342a6b7b67.herokuapp.com/fecha-conta/prod`
  endpoint: 'https://us1.prisma.sh/bruna-aleixo/fecha-conta/dev'
});
exports.prisma = new exports.Prisma();
