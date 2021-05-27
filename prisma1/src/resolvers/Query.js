const Query = {
  bills: (parent, { workDayId }, context, info) => {
    return context.prisma.bills({ 
      where: { 
        workDay: {
          id: workDayId
        }
      }
    }, info)
  },
}

module.exports = {
  Query,
}