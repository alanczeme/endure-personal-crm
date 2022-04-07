puts "🌱 Seeding data..."


n_contacts = 20
domains = ["gmail.com", "gmail.com", "hotmail.com", "yahoo.com", "outlook.com"]

n_contacts.times do
    gender = ['Male', 'Female'].sample
    first_name = gender == 'Male' ? Faker::Name.male_first_name : Faker::Name.female_first_name
    last_name = Faker::Name.last_name
    address = "#{Faker::Address.full_address}"
    bd = Faker::Date.birthday(min_age: 18, max_age: 70)
    email = first_name + "@" + domains.sample

    Contact.create(first_name: first_name, last_name: last_name, avatar: nil, address: address, tags: nil, gender: gender, birthday: bd, email: email)
end 




# Event.create(question: question[0], answer_choices: question[1], question_date: date)

# 10.times do
#     question = questions[0]
#     questions = questions.drop(1)
#     date = Date.today + i
#     i += 1

#     Question.create(question: question[0], answer_choices: question[1], question_date: date)
# end


puts "🌱 Done seeding!"