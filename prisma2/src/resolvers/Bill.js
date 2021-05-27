const Bill = {
  workDay(parent, args, ctx, info) {
    return ctx.prisma.bill.findUnique({where:{id: parent.id}}).workDay()
  },
  tableData(parent, args, ctx, info) {
    return ctx.prisma.bill.findUnique({where:{id: parent.id}}).tableData()
  },
  orders(parent, args, ctx, info) {
    return ctx.prisma.bill.findUnique({where:{id: parent.id}}).orders()
  },
  payments(parent, args, ctx, info) {
    return ctx.prisma.bill.findUnique({where:{id: parent.id}}).payments()
  },
  reopenBills(parent, args, ctx, info) {
    return ctx.prisma.bill.findUnique({where:{id: parent.id}}).reopenBills()
  },
}

module.exports = {
  Bill,
}