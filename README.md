## Project structure

This project contains two main folders, prisma1 and prisma2. In each one, the src/ folder contains the necessary resolvers for running the test query.  

## Starting the server

In each folder (prisma1 or prisma2), run:
 
```sh
node src/index.js
```

## Query
Run the following query in Playground:
```
query($workDayId: ID!) {
  bills(workDayId: $workDayId) {
    id
    createdAt
    closedAt
    status
    registered
    tableData {
      id
    }
    orders {
      id
    }
    payments {
      id
      bill {
        id
      }
    }
    value
    discount
    discountReason
    wasReopen
    reopenBills {
      id
    }
  }
}
```

### Query variables:
#### Prisma 1

```
{
  "workDayId": "ckn254gb5kxms0999nnzriiay"
}
```

#### Prisma 2
```
{
  "workDayId": "ckoqcen7q3035zas4qyi3wik3"
}
```

