const mammals = [
  {"id":0,"name":"Aardwolf","likes":57,"dislikes":5},
  {"id":1,"name":"aardvark","likes":47,"dislikes":3},
  {"id":2,"name":"addax","likes":21,"dislikes":1},
  {"id":3,"name":"alpaca","likes":16,"dislikes":3},
  {"id":4,"name":"anteater","likes":66,"dislikes":2},
  {"id":5,"name":"antelope","likes":35,"dislikes":1},
  {"id":6,"name":"ape","likes":51,"dislikes":5},
  {"id":7,"name":"armadillo","likes":69,"dislikes":1},
  {"id":8,"name":"baboon","likes":59,"dislikes":5},
  {"id":9,"name":"badger","likes":96,"dislikes":4},
  {"id":10,"name":"bat","likes":12,"dislikes":0},
  {"id":11,"name":"bear","likes":2,"dislikes":0},
  {"id":12,"name":"beaver","likes":80,"dislikes":3},
  {"id":13,"name":"bison","likes":62,"dislikes":3},
  {"id":14,"name":"boar","likes":6,"dislikes":2},
  {"id":15,"name":"buffalo","likes":47,"dislikes":3},
  {"id":16,"name":"camel","likes":2,"dislikes":5},
  {"id":17,"name":"caribou","likes":40,"dislikes":3},
  {"id":18,"name":"cat","likes":47,"dislikes":0},
  {"id":19,"name":"cattle","likes":16,"dislikes":0},
  {"id":20,"name":"chamois","likes":82,"dislikes":2},
  {"id":21,"name":"cheetah","likes":43,"dislikes":2},
  {"id":22,"name":"chimpanzee","likes":72,"dislikes":0},
  {"id":23,"name":"chinchilla","likes":88,"dislikes":3},
  {"id":24,"name":"coyote","likes":2,"dislikes":2},
  {"id":25,"name":"deer","likes":55,"dislikes":4},
  {"id":26,"name":"dog","likes":72,"dislikes":0},
  {"id":27,"name":"donkey","likes":93,"dislikes":1},
  {"id":28,"name":"echidna","likes":2,"dislikes":1},
  {"id":29,"name":"eland","likes":31,"dislikes":1},
  {"id":30,"name":"elephant","likes":28,"dislikes":5},
  {"id":31,"name":"elk","likes":71,"dislikes":0},
  {"id":32,"name":"ferret","likes":93,"dislikes":1},
  {"id":33,"name":"fox","likes":52,"dislikes":4},
  {"id":34,"name":"gaur","likes":12,"dislikes":3},
  {"id":35,"name":"gazelle","likes":52,"dislikes":5},
  {"id":36,"name":"gerbil","likes":16,"dislikes":5},
  {"id":37,"name":"giant-panda","likes":21,"dislikes":3},
  {"id":38,"name":"giraffe","likes":7,"dislikes":0},
  {"id":39,"name":"gnu","likes":2,"dislikes":2},
  {"id":40,"name":"goat","likes":95,"dislikes":4},
  {"id":41,"name":"goose","likes":11,"dislikes":1},
  {"id":42,"name":"gorilla","likes":46,"dislikes":0},
  {"id":43,"name":"guanaco","likes":73,"dislikes":0},
  {"id":44,"name":"guinea-pig","likes":17,"dislikes":1},
  {"id":45,"name":"hamster","likes":69,"dislikes":2},
  {"id":46,"name":"hare","likes":60,"dislikes":2},
  {"id":47,"name":"hedgehog","likes":5,"dislikes":3},
  {"id":48,"name":"herring","likes":27,"dislikes":0},
  {"id":49,"name":"hippopotamus","likes":25,"dislikes":3},
  {"id":50,"name":"horse","likes":66,"dislikes":1},
  {"id":51,"name":"human","likes":1,"dislikes":0},
  {"id":52,"name":"hyena","likes":16,"dislikes":1},
  {"id":53,"name":"ibex","likes":73,"dislikes":0},
  {"id":54,"name":"jackal","likes":77,"dislikes":4},
  {"id":55,"name":"jaguar","likes":34,"dislikes":2},
  {"id":56,"name":"kangaroo","likes":34,"dislikes":5},
  {"id":57,"name":"koala","likes":23,"dislikes":3},
  {"id":58,"name":"kouprey","likes":29,"dislikes":4},
  {"id":59,"name":"kudu","likes":1,"dislikes":4},
  {"id":60,"name":"lemur","likes":96,"dislikes":2},
  {"id":61,"name":"leopard","likes":33,"dislikes":5},
  {"id":62,"name":"lion","likes":95,"dislikes":3},
  {"id":63,"name":"llama","likes":6,"dislikes":0},
  {"id":64,"name":"loris","likes":7,"dislikes":4},
  {"id":65,"name":"manatee","likes":95,"dislikes":0},
  {"id":66,"name":"mandrill","likes":51,"dislikes":1},
  {"id":67,"name":"marten","likes":93,"dislikes":1},
  {"id":68,"name":"meerkat","likes":24,"dislikes":3},
  {"id":69,"name":"mink","likes":40,"dislikes":4},
  {"id":70,"name":"mole","likes":40,"dislikes":0},
  {"id":71,"name":"mongoose","likes":61,"dislikes":2},
  {"id":72,"name":"monkey","likes":83,"dislikes":4},
  {"id":73,"name":"moose","likes":35,"dislikes":3},
  {"id":74,"name":"mouse","likes":91,"dislikes":4},
  {"id":75,"name":"mule","likes":12,"dislikes":4},
  {"id":76,"name":"okapi","likes":96,"dislikes":1},
  {"id":77,"name":"opossum","likes":39,"dislikes":5},
  {"id":78,"name":"oryx","likes":10,"dislikes":1},
  {"id":79,"name":"otter","likes":47,"dislikes":2},
  {"id":80,"name":"ox","likes":45,"dislikes":2},
  {"id":81,"name":"panda","likes":97,"dislikes":0},
  {"id":82,"name":"panther","likes":80,"dislikes":2},
  {"id":83,"name":"pig","likes":1,"dislikes":4},
  {"id":84,"name":"polar-bear","likes":85,"dislikes":5},
  {"id":85,"name":"pony","likes":84,"dislikes":0},
  {"id":86,"name":"porcupine","likes":79,"dislikes":4},
  {"id":87,"name":"porpoise","likes":25,"dislikes":4},
  {"id":88,"name":"rabbit","likes":28,"dislikes":3},
  {"id":89,"name":"raccoon","likes":62,"dislikes":0},
  {"id":90,"name":"ram","likes":18,"dislikes":5},
  {"id":91,"name":"rat","likes":70,"dislikes":2},
  {"id":92,"name":"raven","likes":30,"dislikes":2},
  {"id":93,"name":"red-deer","likes":74,"dislikes":2},
  {"id":94,"name":"reindeer","likes":92,"dislikes":5},
  {"id":95,"name":"rhinoceros","likes":9,"dislikes":0},
  {"id":96,"name":"sea-lion","likes":19,"dislikes":3},
  {"id":97,"name":"seal","likes":96,"dislikes":2},
  {"id":98,"name":"sheep","likes":71,"dislikes":4},
  {"id":99,"name":"skunk","likes":7,"dislikes":2},
  {"id":100,"name":"squirrel","likes":56,"dislikes":1},
  {"id":101,"name":"tapir","likes":54,"dislikes":0},
  {"id":102,"name":"tarsier","likes":46,"dislikes":3},
  {"id":103,"name":"tiger","likes":98,"dislikes":4},
  {"id":104,"name":"wallaby","likes":49,"dislikes":5},
  {"id":105,"name":"walrus","likes":23,"dislikes":1},
  {"id":106,"name":"water-buffalo","likes":26,"dislikes":0},
  {"id":107,"name":"weasel","likes":50,"dislikes":2},
  {"id":108,"name":"wolf","likes":42,"dislikes":3},
  {"id":109,"name":"wombat","likes":87,"dislikes":4},
  {"id":110,"name":"yak","likes":71,"dislikes":5},
  {"id":111,"name":"zebra","likes":6,"dislikes":2}
]

const birds = [
  {"id":23,"name":"Eagle","likes":14,"dislikes":1},
  {"id":36,"name":"Egret","likes":81,"dislikes":1},
  {"id":22,"name":"Osprey","likes":32,"dislikes":5},
  {"id":2,"name":"Pigeon","likes":99,"dislikes":2},
  {"id":34,"name":"Pelican","likes":49,"dislikes":0},
  {"id":12,"name":"Swallow","likes":44,"dislikes":2},
  {"id":30,"name":"Bunting","likes":86,"dislikes":1},
  {"id":11,"name":"Bluebird","likes":82,"dislikes":4},
  {"id":28,"name":"Parula","likes":21,"dislikes":1},
  {"id":15,"name":"Kestrel","likes":1,"dislikes":0},
  {"id":39,"name":"Hawk","likes":34,"dislikes":5},
  {"id":32,"name":"Hummingbird","likes":18,"dislikes":1},
  {"id":5,"name":"Duck","likes":61,"dislikes":0},
  {"id":3,"name":"Dove","likes":38,"dislikes":3},
  {"id":24,"name":"Killdeer","likes":60,"dislikes":5},
  {"id":16,"name":"Owl","likes":61,"dislikes":5},
  {"id":21,"name":"Falcon","likes":42,"dislikes":0},
  {"id":31,"name":"Flicker","likes":67,"dislikes":5},
  {"id":14,"name":"Finch","likes":96,"dislikes":3},
  {"id":37,"name":"Grebe","likes":55,"dislikes":3},
  {"id":19,"name":"Grackle","likes":53,"dislikes":2},
  {"id":35,"name":"Goose","likes":43,"dislikes":1},
  {"id":20,"name":"Titmouse","likes":92,"dislikes":4},
  {"id":6,"name":"Crow","likes":69,"dislikes":5},
  {"id":25,"name":"Magpie","likes":41,"dislikes":4},
  {"id":18,"name":"Mockingbird","likes":57,"dislikes":0},
  {"id":26,"name":"Collared Dove","likes":59,"dislikes":0},
  {"id":27,"name":"Blue Tit","likes":89,"dislikes":0},
  {"id":38,"name":"Cormorant","likes":79,"dislikes":3},
  {"id":29,"name":"Warbler","likes":12,"dislikes":5},
  {"id":1,"name":"Starling","likes":100,"dislikes":3},
  {"id":33,"name":"Snowy Owl","likes":70,"dislikes":4},
  {"id":10,"name":"Blackbird","likes":17,"dislikes":3},
  {"id":9,"name":"Goldfinch","likes":99,"dislikes":1},
  {"id":17,"name":"Woodpecker","likes":15,"dislikes":0},
  {"id":13,"name":"Chickadee","likes":71,"dislikes":0},
  {"id":7,"name":"Cardinal","likes":5,"dislikes":0},
  {"id":8,"name":"Jay","likes":49,"dislikes":2},
  {"id":4,"name":"Robin","likes":55,"dislikes":2},
  {"id":0,"name":"Sparrow","likes":74,"dislikes":2},
]


const reptiles = [
  {"id":0,"name":"alligator","likes":3,"dislikes":1},
  {"id":1,"name":"anaconda","likes":2,"dislikes":4},
  {"id":2,"name":"boa-constrictor","likes":1,"dislikes":3},
  {"id":3,"name":"chameleon","likes":5,"dislikes":2},
  {"id":4,"name":"cobra","likes":4,"dislikes":0},
  {"id":5,"name":"crocodile","likes":0,"dislikes":5},
  {"id":6,"name":"gecko","likes":1,"dislikes":4},
  {"id":7,"name":"iguana","likes":5,"dislikes":0},
  {"id":8,"name":"komodo-dragon","likes":3,"dislikes":0},
  {"id":9,"name":"lizard","likes":0,"dislikes":4},
  {"id":10,"name":"monitor-lizard","likes":1,"dislikes":5},
  {"id":11,"name":"python","likes":5,"dislikes":2},
  {"id":12,"name":"rattlesnake","likes":2,"dislikes":4},
  {"id":13,"name":"salamander","likes":3,"dislikes":2},
  {"id":14,"name":"sea-snake","likes":0,"dislikes":2},
  {"id":15,"name":"sea-turtle","likes":2,"dislikes":3},
  {"id":16,"name":"skink","likes":4,"dislikes":1},
  {"id":17,"name":"snake","likes":5,"dislikes":4},
  {"id":18,"name":"tortoise","likes":5,"dislikes":1},
  {"id":19,"name":"tuatara","likes":0,"dislikes":2},
  {"id":20,"name":"turtle","likes":4,"dislikes":1},
  {"id":21,"name":"viper","likes":3,"dislikes":3},
  {"id":22,"name":"water-snake","likes":2,"dislikes":4},
]


const fish = [
  { "id":0, "name": 'Clownfish', "likes": 2, "dislikes":0 },
  { "id":1, "name": 'Blue Tang', "likes": 0, "dislikes":0 },
  { "id":2, "name": 'Goldfish', "likes": 50, "dislikes":0 },
  { "id":3, "name": 'Koi Carp', "likes": 0, "dislikes":0 },
  { "id":4, "name": 'Angelfish', "likes": 1, "dislikes":0 },
  { "id":5, "name": 'Betta', "likes": 0, "dislikes":0 },
  { "id":6, "name": 'Guppy', "likes": 0, "dislikes":0 },
  { "id":7, "name": 'Oscar', "likes": 0, "dislikes":0 },
  { "id":8, "name": 'Neon Tetra', "likes": 0, "dislikes":0 },
  { "id":9, "name": 'Zebrafish', "likes": 0, "dislikes":0 },
  { "id":10, "name": 'Piranha', "likes": 0, "dislikes":1},
  { "id":11, "name": 'Arowana', "likes": 0, "dislikes":0 },
  { "id":12, "name": 'Catfish', "likes": 10, "dislikes":10 },
  { "id":13, "name": 'Pufferfish', "likes": 0, "dislikes":0 },
  { "id":14, "name": 'Swordtail', "likes": 0, "dislikes":0 },
  { "id":15, "name": 'Discus', "likes": 0, "dislikes":0 },
  { "id":16, "name": 'Molly', "likes": 0, "dislikes":0 },
  { "id":17, "name": 'Platy', "likes": 0, "dislikes":0 },
  { "id":18, "name": 'Cichlid', "likes": 0, "dislikes":0 },
  { "id":19, "name": 'Rainbowfish', "likes": 0, "dislikes":0 },
  { "id":20, "name": 'Shark', "likes": 5, "dislikes":50 },
  { "id":21, "name": 'Stingray', "likes": 0, "dislikes":10 },
  { "id":22, "name": 'Eel', "likes": 0, "dislikes":10 },
  { "id":23, "name": 'Salmon', "likes": 100, "dislikes":0 },
  { "id":24, "name": 'Trout', "likes": 2, "dislikes":0 },
  { "id":26, "name": 'Carp', "likes": 0, "dislikes":0 },
  { "id":27, "name": 'Barracuda', "likes": 0, "dislikes":10 },
  { "id":28, "name": 'Halibut', "ikes": 0, "dislikes":0 },
  { "id":29, "name": 'Tuna', "likes": 30, "dislikes":0 },
  { "id":30, "name": 'Cod', "likes": 9, "dislikes":0 },
  { "id":31, "name": 'Bass', "likes": 10, "dislikes":0 },
  { "id":32, "name": 'Flounder', "likes": 0, "dislikes":0 },
  { "id":33, "name": 'Grouper', "likes": 0, "dislikes":0 },
  { "id":34, "name": 'Herring', "likes": 8, "dislikes":2 },
  { "id":35,  "name": 'Mackerel', "likes": 50, "dislikes":2 },
  { "id":36, "name": 'Marlin', "likes": 0, "dislikes":0 },
  { "id":37, "name": 'Snapper', "likes": 0, "dislikes":0 },
  { "id":38, "name": 'Sole', "likes": 0, "dislikes":0 },
  { "id":39, "name": 'Swordfish', "likes": 0, "dislikes":0 },
  { "id":40, "name": 'Tilapia', "likes": 30, "dislikes": 9 },
]

const insects = [
  { "id":0, "name": 'Monarch Butterfly', likes: 1, dislikes: 2 },
  { "id":1, "name": 'European Honey Bee', likes: 0, dislikes: 1 },
  { "id":2, "name": 'Praying Mantis', likes: 2, dislikes: 4 },
  { "id":3, "name": 'Ladybug', likes: 1, dislikes: 3 },
  { "id":4, "name": 'Atlas Moth', likes: 5, dislikes: 1 },
  { "id":5, "name": 'Dragonfly', likes: 0, dislikes: 3 },
  { "id":6, "name": 'Firefly', likes: 3, dislikes: 1 },
  { "id":7, "name": 'Grasshopper', likes: 2, dislikes: 0 },
  { "id":8, "name": 'Cicada', likes: 4, dislikes: 2 },
  { "id":9, "name": 'Bumblebee', likes: 5, dislikes: 2 },
  { "id":10, "name": 'Ant', likes: 3, dislikes: 0 },
  { "id":11, "name": 'Termite', likes: 5, dislikes: 4 },
  { "id":12, "name": 'Mosquito', likes: 1, dislikes: 4 },
  { "id":13, "name": 'Beetle', likes: 3, dislikes: 2 },
  { "id":14, "name": 'Stick Insect', likes: 4, dislikes: 0 },
  { "id":15, "name": 'Cockroach', likes: 2, dislikes: 3 },
  { "id":16, "name": 'Butterfly', likes: 1, dislikes: 0 },
  { "id":17, "name": 'Moth', likes: 3, dislikes: 5 },
  { "id":18, "name": 'Flea', likes: 5, dislikes: 4 },
  { "id":19, "name": 'Tick', likes: 2, dislikes: 3 },
  { "id":20, "name": 'Cricket', likes: 0, dislikes: 2 },
  { "id":21, "name": 'Locust', likes: 1, dislikes: 4 },
  { "id":22, "name": 'Aphid', likes: 4, dislikes: 2 },
  { "id":23, "name": 'Earwig', likes: 1, dislikes: 0 },
  { "id":24, "name": 'Silverfish', likes: 2, dislikes: 1 },
  { "id":25, "name": 'Mayfly', likes: 5, dislikes: 3 },
  { "id":26, "name": 'Fruit Fly', likes: 0, dislikes: 3 },
  { "id":27, "name": 'Lacewing', likes: 2, dislikes: 5 },
  { "id":28, "name": 'Damselfly', likes: 4, dislikes: 0 },
  { "id":29, "name": 'Weevil', likes: 1, dislikes: 2 },
  { "id":30, "name": 'Caterpillar', likes: 5, dislikes: 1 },
  { "id":31, "name": 'Sawfly', likes: 2, dislikes: 3 },
  { "id":32, "name": 'Scorpion Fly', likes: 4, dislikes: 1 },
  { "id":33, "name": 'Dragonfly Nymph', likes: 0, dislikes: 5 },
  { "id":34, "name": 'Hornet', likes: 3, dislikes: 0 },
  { "id":35, "name": 'Yellow Jacket', likes: 4, dislikes: 1 },
  { "id":36, "name": 'Wasp', likes: 0, dislikes: 5 },
  { "id":37, "name": 'Stink Bug', likes: 1, dislikes: 4 },
  { "id":38, "name": 'Shield Bug', likes: 3, dislikes: 2 },
  { "id":39, "name": 'Lady Beetle', likes: 5, dislikes: 0 },
]

export default { mammals, birds, reptiles, fish, insects }

