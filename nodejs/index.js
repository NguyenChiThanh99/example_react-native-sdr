var express = require("express");
var app = express();
app.listen(3000, () => console.log("Server listening on port 3000"));

function getTemplate1() {
  return {
    type: "View",
    props: {
      style: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      },
    },
    children: [
      {
        type: "Text",
        props: { style: { fontSize: 20, margin: 20 } },
        children: "Screen One",
      },
      {
        type: "Image",
        props: {
          source: {
            uri:
              "https://static.ybox.vn/2018/7/5/1530831493545-1528239466035-1525583724314-1764f0c2-3b4c-11e8-8799-2e995a9a3302.png",
          },
          style: { width: 80, height: 80, marginBottom: 20 },
        },
      },
      {
        type: "Button",
        props: {
          onPress: "function::navigation.navigate(SCREENTWO)",
          style: {
            backgroundColor: "green",
            borderRadius: 8,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          },
        },
        children: [
          {
            type: "Text",
            props: { style: { color: "white" } },
            children: "Go to Screen Two",
          },
        ],
      },
    ],
  };
}

function getTemplate2() {
  return {
    type: "View",
    props: {
      style: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      },
    },
    children: [
      {
        type: "Text",
        props: { style: { fontSize: 20, margin: 20 } },
        children: "Screen Two",
      },
      {
        type: "Image",
        props: {
          source: {
            uri:
              "https://diabeticmuscleandfitness.com/wp-content/uploads/2018/05/number-2-256.png",
          },
          style: { width: 80, height: 80, marginBottom: 20 },
        },
      },
      {
        type: "Button",
        props: {
          onPress: "function::navigation.goBack()",
          style: {
            backgroundColor: "blue",
            borderRadius: 8,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          },
        },
        children: [
          {
            type: "Text",
            props: { style: { color: "white" } },
            children: "Go Back",
          },
        ],
      },
    ],
  };
}

app.get("/screenone", (req, res) => {
  const template = getTemplate1();
  res.json(template);
});

app.get("/screentwo", (req, res) => {
  const template = getTemplate2();
  res.json(template);
});
