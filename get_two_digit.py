endlist = []
with open("all.csv","r") as countries:
    countries = countries.readlines()
    for country in countries:
        country_code = country.split(",")[1]
        endlist.append(country_code)

print(endlist)
