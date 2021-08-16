import json
import random
import names

salaries = []
departments = ['Finance', 'Engineering', 'HR', 'IT', 'Sales']
years=[2016, 2017, 2018, 2019, 2020]

for i in range(10000):
    with open('salaries.json', 'a+') as f:
        if i%100 == 0:
            print(f'Handling index {i}')
        document = {}
        document["_id"] = i+1
        document["dept"] = random.choice(departments)
        document["name"] = names.get_full_name()
        document["salary"] = 1000*random.randrange(50, 150)
        document["fiscal_year"]=random.choice(years)
        f.write(f'{json.dumps(document)}\n')