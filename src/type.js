"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
})
  .pause(800)
  .move(null, { to: "END" })
  .pause(500)
  .delete()
  .type("Full-stack Engineer")
  .pause(800)
  .move(null, { to: "END" })
  .pause(500)
  .delete()
  .go();
