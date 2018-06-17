import React, { Component } from "react";
import "./App.css";

const STORIES_PER_PAGE = 30;

class App extends Component {
  state = {
    maxItem: 0,
    item: {},
    topStoriesIDs: [],
    stories: []
  };

  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(resp => resp.json())
      .then(topStoriesIDs => {
        this.setState({ topStoriesIDs });
        this.getStories(topStoriesIDs.slice(0, STORIES_PER_PAGE));
      });
  }

  async getStories(storiesIDs) {
    const stories = await Promise.all(storiesIDs.map(id => this.getItem(id)));

    this.setState({ stories });
  }

  async getItem(storyID) {
    const item = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`
    ).then(resp => resp.json());

    return item;
  }

  render() {
    return <div className="app" />;
  }
}

export default App;
