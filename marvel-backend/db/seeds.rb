# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Meme.all.destroy_all
Panel.all.destroy_all

# meme_1 = Meme.create(title: "How 2020's going for me...")
# meme_2 = Meme.create(title: "Parenting as Iron Man...")

# panel_1 = meme_1.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 2.19.10 PM.png', caption: 'June 2020', order: 1)
# panel_2 = meme_1.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 2.19.54 PM.png', caption: 'August  2020', order: 2)
# panel_3 = meme_1.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 2.20.18 PM.png', caption: 'October 2020', order: 3)
# panel_4 = meme_1.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 2.21.21 PM.png', caption: 'December 2020', order: 4)

# panel_5 = meme_2.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 2.55.34 PM.png', caption: 'Waking up as a parent, ready to take on the day.', order: 1)
# panel_6 = meme_2.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 3.13.29 PM.png', caption: 'Getting the kids breakfast, getting them dressed, and to school.', order: 2)
# panel_7 = meme_2.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 3.13.34 PM.png', caption: 'Picking them up from school, arguing about homework and screentime.', order: 3)
# panel_8 = meme_2.panels.create(image_url: 'Panel Images/Iron Man Panels/Screen Shot 2020-11-12 at 3.14.05 PM.png', caption: 'Finally putting them to bed.', order: 4)



