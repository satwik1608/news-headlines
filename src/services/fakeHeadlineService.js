const headlines = [
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471874",
    author: "gasdgfdsa",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471884",
    author: "gasdgfdsa",
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471865",
    author: "gasdgfdsa",
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471846",
    author: "gasdgfdsa",
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471823",
    author: "gasdgfdsa",
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471816",
    author: "gasdgfdsa",
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471843",
    author: "gasdgfdsa",
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471813",
    author: "gasdgfdsa",
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471812",
    author: "gasdgfdsa",
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    likes: 0,
    id: "5b21ca3eeb7f6fbccd471819",
    author: "gasdgfdsa",
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
];

export function getHeadlines() {
  return headlines;
}

export function getHeadline(id) {
  return headlines.find((hl) => hl.id === id);
}

export function saveHeadline(headline) {
  let headlineInDb = headlines.find((hl) => hl._id === headline._id) || {};
  headlineInDb.title = headline.title;

  headlineInDb.body = headline.body;
  headlineInDb.author = headline.author;
  if (!headlineInDb.id) {
    headlineInDb.id = Date.now().toString();
    headlineInDb.likes = 0;
    headlines.push(headlineInDb);
  }

  return headlineInDb;
}
