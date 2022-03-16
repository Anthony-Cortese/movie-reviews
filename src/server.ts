import { createServer, Model } from "miragejs";
import { v4 as uuid } from "uuid";

import Review from "./types/Review";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      review: Model.extend<Partial<Review>>({}),
    },
    seeds(server) {
      server.create("review", {
        image:
          "https://m.media-amazon.com/images/I/7106uLYY2LL._AC_SL1111_.jpg",
        id: uuid(),
        title: "Inception (2010)",
        genres: "5 Stars",
        opinion:
          "What makes Inception — written and directed by Christopher Nolan –  so successful is the panache with which it brazens right past its ludicrous premise: that teams of thieves can design our dreams, and then enter our minds to steal our secrets. To its credit, the movie doesn’t bother trying to explain the pseudoscience and instead carefully explains the various rules that govern the world of dreams. The explanation is lengthy and complex, and I was sure I would forget it or get confused, but – again, to the film’s credit – the action plays out in a way where it (or most of it) make sense.",
      });
      server.create("review", {
        image:
          "https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        id: uuid(),
        title: "Zodiac (2007)",
        genres: "5 Stars",
        opinion:
          "To fully appreciate Zodiac, you have to watch it more than once. On the first viewing, you should focus on the story, the plot, and the red herrings. The twisting tale of the Zodiac killer — a serial killer who tortured Northern California with his sick games for more than a decade — is one that is not easily unraveled. It’s a disorienting story. And director David Fincher understands that. He puts you into the headspace of the characters by playing with space and time.",
      });
      server.create("review", {
        image:
          "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_.jpg",
        id: uuid(),
        title: "Black Swan (2010)",
        genres: "5 Stars",
        opinion:
          "Black Swan was sufficiently disturbing. A beautifully crafted movie with a thrilling, chilling charm.  Natalie Portman’s finest performance.  A prima ballerina with visions.",
      });
    },
    routes() {
      this.namespace = "api/reviews";

      this.get("/", (schema) => {
        return schema.db.reviews;
      });
      this.post("/", (schema, request) => {
        const attrs: Review = JSON.parse(request.requestBody);
        schema.db.reviews.insert(attrs);
        return schema.db.reviews;
      });
      this.patch("/:id", (schema, request) => {
        const id: string = String(request.params.id);
        const updatedReview: Review = JSON.parse(request.requestBody);
        schema.db.reviews.update(id, updatedReview);
        return schema.db.reviews;
      });
      this.delete("/:id", (schema, request) => {
        const id: string = String(request.params.id);
        schema.db.reviews.remove(id);
        return schema.db.reviews;
      });
    },
  });

  return server;
}
