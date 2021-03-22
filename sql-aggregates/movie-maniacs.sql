  select "firstName",
         "lastName",
         sum("payments"."amount") as "Total Amount"
    from "customers"
    join "payments" using ("customerId")
group by "customers"."customerId"
order by "Total Amount" desc;
