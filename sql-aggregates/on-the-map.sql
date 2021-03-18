  select "countries"."name" as "Countries",
         count("cities".*) as "Cities"
    from "countries"
    join "cities" using ("countryId")
group by "countries"."countryId"
