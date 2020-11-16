# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

meme_1 = Meme.create(title: "2020 for me...")

meme_2 = Meme.create(title: "Parenting as Iron Man...")

panel_1 = Panel.create(image_url: '', caption: '', meme_id: 1, order: 1)
panel_2 = Panel.create(image_url: '', caption: '', meme_id: 1, order: 2)
panel_3 = Panel.create(image_url: '', caption: '', meme_id: 1, order: 3)
panel_4 = Panel.create(image_url: '', caption: '', meme_id: 1, order: 4)