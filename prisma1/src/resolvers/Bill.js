const Bill = {
  workDay(parent, args, ctx, info) {
    return ctx.prisma.bill({id: parent.id}).workDay()
  },
  orders(parent, args, ctx, info) {
    return ctx.prisma.bill({id: parent.id}).orders()
  },
  tableData(parent, args, ctx, info) {
    return ctx.prisma.bill({id: parent.id}).tableData()
  },
  payments(parent, args, ctx, info) {
    return ctx.prisma.bill({id: parent.id}).payments()
  },
  reopenBills(parent, args, ctx, info) {
    return ctx.prisma.bill({id: parent.id}).reopenBills()
  },
}

module.exports = {
  Bill,
}