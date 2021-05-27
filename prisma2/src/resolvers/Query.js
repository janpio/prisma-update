const Query = {
  bills: (parent, { workDayId }, context) => {
    return context.prisma.bill.findMany({ 
      where: { 
        workDay: {
          id: workDayId
        }
      }
    })
  },
}

module.exports = {
  Query,
}