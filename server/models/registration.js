const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  img: {
    type: String,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECBAUHA//EADMQAAICAQICBwcEAgMAAAAAAAABAgMEBREGMRITIUFRYcEjQnGBkaGxIjJS0XLwFENT/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOxAAAAAAAAAAAAAAAAAAAAAAAAAAAYmo6ji6bT1mXao7/tiu2Uvgu88Nd1arScTrJbStn2V17/ufj8Ec6zMq/NyJ35NjnZLm33LwXkBIc7jLJnJxwaIVR/lZ+qT9EayfEWrze7zrF/jGK9DVADcU8TavU9/+X1i8LIRfpubvTuMa7JKvUaerf8A61dq+nMhgA63TbXfVG2mcZ1yW8ZRe6Zec10PWb9Jv3i3OiT9pVv2PzXgzouPfXk0Qvol067F0ovyA9QAAAAAAAADB1y942j5lsXtJVNRfm+z1AgOv6jLUtTtuT9lF9CpeEV3/Pma0qUAAAAAAKolfA+oON1mn2S/TNdZVu+T716/IiZmaPe8bVcS6Pu2xXyb2f5A6kA+YAAAAAABquJ4uWg5m3dBP7o2p45dCysW7Hl2K2Dhv4bgcoZQushOuyVdi2nBuMl4Ncy0AAAAAAHtiRcsqiK5u2K+6PE2/CuK8rW8f+NT62XwXL77AdHfNgAAAAKFQAAAAhXGekyqvepUR3rsftkvdl4/P8kXOtWVwtrlXZFShJbSi+TRCdc4WvxpSv0+Mrsd9rgu2UP7QEaBXbZtPsa5gCgKl+PTbk2qrHrnbY+UYLdgWc3suZ0LhXSZadguy6O2Rfs5r+K7o/76GLw7wzHClHKz9p3rthWu2Nf9skoAAAAAAAAA8crKow6XblWxqgu+TMXWdVo0rF6239VkuyutPZyf9eZzzUtQydSyHdlWOT92PuxXgkBNsXirTsjLdD6yqPKNtiSjJ+hvF2pNbbPkzkZsdN1zP01KGPd0ql/1Wfqj8vD5AT/N0rAznvlY0Jy/nyl9Uauzg/TJP9M8mHkrE/yjGxeNKJJLLxLYPxqakvo9jPjxVpLW7vnH41S9EBZTwlpVb3nG63ynZ2fbY2+LiY+HX1eLTCqPhFbbmot4t0qEd4TusfhGrb87GrzeNJyTjg4qhv79z3a+S/sCW5ORTi0u7IsjXXH3pGpwuKNNyr3U5zpe+0JWrZT+fd8yC5udk59vWZd0rJd2/JfBdxjgddXaCAcPcRW6fKOPlN2YnLxdfmvLyJ7XONkIzrkpRkt4yXJoC4AADyyb68bHsvul0a649KT8EepEeOdQaVenVvn7S30Xr9AI5q2oW6nmzyLexcoQ7oR7kYZQAAABUoAAAAAAAVJTwZq7qtWm5EvZzfsW/dl/H5/7zIqXRcoyUotxlF7pruYHXAYOjZy1HTacn3pLaaXdJczOAo/N7I5bquU87UcjJ33Vljcf8eS+2x0fV7JU6VmWR/dGmW30OXKL2AoC7osdFgWgu6LHRYFoLuix0WBaC7osdFgWgu6LHRYFoLuix0WBKuA8vo3ZOHJ9ko9bFea7H+V9CZHOOF5yq13Ea5Sk4P4NM6MB/9k="
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("register", registerSchema);
