import React from "react";
import { withRouter } from "react-router-dom";
import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  grid: {
    height: "100%"
  },
  img: {
    height: "200px",
    width: "200px"
  }
});
const SuccessfullyLogedIn = props => {
  const Classes = useStyles();
  console.log(props);
  return (
    <React.Fragment>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        className={`${Classes.grid}`}
      >
        <Grid item>
          <Avatar
            className={`${Classes.img}`}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAk1BMVEX///9f0l9f01/S8tLq6urT8tPP8c/Z9NnW89Zd011U0FRb0ltX0FdW0FZP0E9N0E329vb2/Pbw8PDy+/L6/vq+7L7e9d5q1Wrn+Ofc9dzt+u30/PTk9+Su567C7cKC24J52Hly13Kk5KSY4ZiI3Ii26baQ35Cl5KW56rls1mx22Hab4puG3Iaw57DI7shEzkQ5zDkuWG2fAAAJIElEQVR4nO1dWXuiOhgWOCxJQMdWpaW1rtVaK+f8/193koCtRZQsGPgY34u5mnmGt/n2rb0ecIw37M8kafo7TOF1h/GyNww8b9j0p5jBcoBsuz8NHMfxRk1/jAG8xpFNYWFO2W36c26PKXtgStiy8DujHDT9QTfG8BPnfBnlMaPsN/1NN0WAyQ9hyw7fKGWvy5S3XKKtb+SUn5v+rpthdiLRfwPlxAqLhLtN2e2jc8JdpvxeUOETyuNOmq99v+yBM8rRRwcpn9usU8odDEUWJTbrFHjqdyrgHMbkOmFKec8oOx1JKxJUSZhS3jDK3Ugen3CpVyoinAUupfzY9Ofq47XcDZdQXriMMviqiDBhyyJxyrzUa9OfrIeJOGHGeQw+/JIjTB0z81IeYMc8GUgRpsArnyqzA9VkS+jwN8I5YPv1pEAYtP1KxPzwGVD47oNMLF5CNcLMfmXKDCzkHFmqhC2mzA48Za5OHq6BWLwwMmmahQQ+K9LDKth4SSXbC8BI9lekR5gimjsBHMleXat4iIJYYx+KZE8v17RkYOM9k2y3/ZKdDmohbLEE0oMg2c+ccC2MaTQyZc/c7mgkUYotL8HGM+aanRaXRkZ2nYSp/erHntPqOHuhFXkUYBP8xQ32c3vfeKPviH/4hmTl+a7nvbbYWh/qcMRHvmjpBpTvU9OkrsGpz0yHZO8GTsv51mimSbRyIdQFdBLEX8BrL6BueNJi/eWY12Om7WjxxvOm1pf3lvVYLYKmvALS9tDyGE3rMkZ4A0KBKZ5qIRzGQAS6V5PVwnveX2y3R8ox06zy8Ade8Eo1jErPVN9qIZ7/A3ngnq+vxOHuDc4D94aK3Ycf2HjDNRiAiebQzhCJ9cEHXyCYaAbt0APPHFD1eFdTiRHe+qB6LrpKnDdcANRoj9BUYjzjHXIwEt3rbbWUOGsvAZJoXU+MEF8NAWOjKUaRjhLnLYd2198LmOkoMd74kKIOjncNJbapU3JgqbBeTowIOBWmiNWVmMRchYFN563U+w/hPADmhRk0yvEQbRZ1TMrRJUib1dNwTHbEN1/ALQiMVWc9EHoLIC6BJH1FJc6MNMDdpoWiEufLEKACSw7VPnG+8ALMK/XUg61o7bd7puMiFIMtvOKEYVSkf2GrFmzR7B+iG6Z4VZPpbBsT5NKakkznG7cgCS9VZNrGHyADLYaJikxnm/NAj/ioNIqz6wjwIksOFZlGkAmr2GlEUriEVew0QpAJK8wCwCasEE/nhAE10n5hJy3TwAnLF+RhG63eo3Tdw4ZNWH7SFHTgQZHKPjF0wtL1aRsDjqUZNrJziICzJQ7pYQAMsw7/A9mUKTt46r0Y+8CnwZTqz4tf1/84lUyZ8taSwYqHhaL+dhg4XlAL50RSprNzWyaLeGv2JFGfrdB4fg2qJOmKo43pMu0xHAz5loX+Fk0q11YLjRfif+wq36TR/mlLzjCFM07YYKvl5VesgDcBFW1XR7Tlxh/IgveWTN6cKtQpQj68rCFjcpUeFLPuodETzWeXKbIBdc9RtdpSWTGyPNfwIciy0dDQGquvTY1lsmI7TBlhp2ZS11C+WpYtmijtXYykFk7NZw8XdS78VDw0IZVB4IPpYHp42Y8QpHRCRarp0kC/9NrFJJuHfrLj+TIF6tB4qFW1SxfJnx2VMVt55GFy5qHygFA+/yn+CDKFjyzyMOqI36uj32x8TFyZV+JmC1n8OIvJQS2hlWcbHyRucEpEWw04YlGjKnMpWmJOLa9qGXTE4pcpxC9Fp1j4ifHW9JTHCIk/B7WpYiZbPElswC9JnS7MJ9irAgXxcQAyN50R9+ZyxWQichxbvLaFYuN+aS07nEF2buUGu/DIuE2MJ4gKC8Bk51RQ9oXbTObzpYPKODuJKygLB9TmzfSb2phkhWALB9TmzbTyEs51yqKeiXyaNtNKQ4P5xy4uOylRz4Qs13A0rXYH/Eh5fimBF/ZMkeloOtHa/z1mtOdGZy3omYy3TIdE8/RIWB5ji6pKuDJc5dG6A54hbwIWfKlgzpRrhcGih94d8Jxyya/yTMU8U959MGi1qn5NlCDl8dmOmeAhV+NWa17P+dGseHHaGBMczTNem57Vdm81ize/tVGwmpcbPXNWa/9vRGq6t1pwy2LBh/lYq5eMZ31M6rm4euqjHoU8k22+cskwStf1kM4MdmaDNkIOoLl5vFE6H9C4S5vy27GIITY0jpdNrms9Hiysq9JZQsCsl1Dlg5jvtxQQfOk+dG69Xp5FKh8N1LXOkSz7LKlQpxxxOfU/RTwTNt5+KMeHjXU447HrBFORmrzxkcvLSGMNzszf+LFtVRLO59NasjftaXAms8k2pMyr/nnMPVl7bh9ocI62MZ/zu/63zPcQK5Eq63MoUvWYtnFQ/ANHNSUZ5z+UVinxCZYDchPOqG1K/INk1r/wi9K1YLwIIAPXwrVTbpEnLsW0btEmX02H01V4nNcq2sgKmsiJ5ZBGYX2Us5Sy7Ttqo3Vtzxw1mhNLwKnpmRuY9VDFaFPHMzcw+qCBFOsb7byn1nIl/sZwrvs7HxsY2NLE+0BLslscXV7Ek6XTpcrqPF7TJCSxUZdsMI6pgFTVZgNyTAUksVJ3DpZjKkBJsmHvx3/I22zS1rKHICaRZDRiW9wxtTtjuorhTk6ZWeUeULBVCillNj7AdBMcxJUZ7bhMm1yfvglcYc+cVwGa/mB9PBEx+xXuYQZbJRgJ2S+04LtRAIOtMnwJTG21ujwtj32lyY6M7wPcGIfBdcrI/MjWrfF21UvZodcpmeYIrlFue8tFDa/4ImXzw9NmcHHtIJdpmEnxVTyi8pG1bso0x9Aqo9xVmeYYlSwfdFemOUa7M8odlukMu0ItG3VZpjMUlkyiDsYeRfyi3Ll4uhQnupzF013JES/jx2K3ZZj41vh2UiHQJpM8hvlJkZ3fiVqeCB55jN3vSi1PBAnNpPAh8eDXp4UxGaCYppAerGEALTj/sTjrGXbPRQ6ZwfpbZPqOO+6444477rjDFP6Uo+nPqhOUzsPDwz+CoH8VLn/GVJRoGXdgxP9ocD2l3TQPYdTDl6FpJqL4oyPPp4Ak2XpazPAAie4Rcob6yBSwuT7F0fM+lKCFXvl/e/e0in/PGd8AAAAASUVORK5CYII="
          />
        </Grid>
        <Grid item>
          <Typography variant="h4">Successfully Loged In</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withRouter(SuccessfullyLogedIn);
