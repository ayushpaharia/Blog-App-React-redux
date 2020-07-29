import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    const capitalize = (str) => {
      if (typeof str === "string") {
        return str.replace(/^\w/, (c) => c.toUpperCase());
      } else {
        return "";
      }
    };
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <div className="description">
            <div style={{ display: "flex", alignItems: "center" }}>
              <i className="big middle aligned icon user" />
              <h2
                style={{ color: "#000", position: "relative", top: "-0.75rem" }}
              >
                {capitalize(post.title)}
              </h2>
            </div>
            <p>{capitalize(post.body)}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
