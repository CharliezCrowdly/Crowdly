const lstpost = [
  {
    id: 1,

    location: "kathmandu",

    filetype: "image/jpeg",
    postfile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!",
    createdAt: "",
    userid: {
      _id: "636d32011dadf95e3112bd77",
      username: "johnDoe",
      profilePicture:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
  },

  {
    id: 2,

    location: "kathmandu",

    filetype: "image/jpeg",
    postfile:
      "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!",
    createdAt: "",
    userid: {
      _id: 2,
      username: "johnDoe",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 3,

    location: "kathmandu",

    filetype: "image/jpeg",
    postfile:
      "https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!",
    createdAt: "",
    userid: {
      _id: 3,
      username: "johnDoe",
      profilePicture:
        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: 4,

    location: "kathmandu",

    filetype: "video/mp4",
    postfile:
      "https://vod-progressive.akamaized.net/exp=1668439761~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3415%2F20%2F517077677%2F2403184845.mp4~hmac=b19e5bb69a6d623d321fa624f9a34ea41f83cad59d017205c9396691ab20753a/vimeo-prod-skyfire-std-us/01/3415/20/517077677/2403184845.mp4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!",
    createdAt: "",
    userid: {
      _id: 4,

      username: "johnDoe",
      profilePicture:
        "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: 5,

    location: "kathmandu",

    filetype: "video/mp4",
    postfile:
      "https://download-video.akamaized.net/2/playback/5e4a828c-4377-4ba3-921e-72f556df1770/f82d281d-0d3faf1f?__token__=st=1668338268~exp=1668352668~acl=%2F2%2Fplayback%2F5e4a828c-4377-4ba3-921e-72f556df1770%2Ff82d281d-0d3faf1f%2A~hmac=e9becaa137568119e8a140bcf59689a32a1e318f2a60274b2021fdf636bb1984&r=dXMtd2VzdDE%3D",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!",
    createdAt: "",
    userid: {
      _id: 5,

      username: "johnDoe",
      profilePicture:
        "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },

  {
    id: 6,

    location: "kathmandu",

    filetype: "video/mp4",
    postfile:
      "https://vod-progressive.akamaized.net/exp=1668353163~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1324%2F22%2F556623896%2F2632732721.mp4~hmac=7bb3e1ca8c3027801df675c8ba7fc6ae21ff6103e6cbaf9451019af67cce904a/vimeo-prod-skyfire-std-us/01/1324/22/556623896/2632732721.mp4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!",
    createdAt: "",
    userid: {
      _id: 6,

      username: "johnDoe",
      profilePicture:
        "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },

  {
    id: 7,

    location: "kathmandu",

    filetype: "video/mp4",
    postfile:
      "https://vod-progressive.akamaized.net/exp=1668353448~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3764%2F18%2F468821581%2F2083983874.mp4~hmac=effeb5082c34143091bd616bfbf066d3aa898836b4396decaf73ca15dacda6df/vimeo-prod-skyfire-std-us/01/3764/18/468821581/2083983874.mp4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!",
    createdAt: "",
    userid: {
      _id: 7,

      username: "johnDoe",
      profilePicture:
        "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
];

export default lstpost;
