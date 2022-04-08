puts "🌱 Seeding data..."

puts "🧑‍🦱 Seeding user..."
User.create(username: "alancz", password_digest: 123)

puts "👥 Seeding contacts..."
n_contacts = 20
domains = ["gmail.com", "gmail.com", "hotmail.com", "yahoo.com", "outlook.com"]

n_contacts.times do
    gender = ['Male', 'Female'].sample
    first_name = gender == 'Male' ? Faker::Name.male_first_name : Faker::Name.female_first_name
    last_name = Faker::Name.last_name
    address = Faker::Address.full_address
    bd = Faker::Date.birthday(min_age: 18, max_age: 70)
    email = first_name + "@" + domains.sample

    Contact.create(user_id: 1, first_name: first_name, last_name: last_name, avatar: nil, address: address, tags: nil, gender: gender, birthday: bd, email: email)
end 

puts "🗓 Seeding events..."

n_events = 150

n_events.times do

    restaurant = Faker::Restaurant.name
    cuisine = Faker::Restaurant.type
    movie = Faker::Movie.title
    concert = "#{Faker::Music.band} concert"
    musical = Faker::Show.adult_musical
    play = Faker::Show.play

    title = [restaurant, cuisine, movie, concert, musical, play].sample

    address = Faker::Address.full_address

    startdatetime = Faker::Time.between_dates(from: Date.today - 90, to: Date.today + 21, period: :evening) #=> "2014-09-19 20:21:03 -0700"
    enddatetime = startdatetime + [3600, 4500, 5400, 6300, 7200, 8100, 9000, 9900, 10800].sample

    Event.create(user_id: 1, title: title, description: nil, start: startdatetime, end: enddatetime, tags: nil, location: address, notes: nil)
end

puts "👥🗓 Seeding ContactEvents (join table)..."

n_contactevents = 280

n_contactevents.times do

    event_id = rand(1..n_events)
    contact_id = rand(1..n_contacts)

    if Contactevent.count == 0 
        Contactevent.create(event_id: event_id, contact_id: contact_id)
    else 
        duplicate = Contactevent.select {|a| a.event_id == event_id && a.contact_id == contact_id}
        duplicate == [] ? Contactevent.create(event_id: event_id, contact_id: contact_id) : nil
    end

end

puts "🌱 Done seeding!"