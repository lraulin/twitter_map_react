import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { getTweetsByVisibilityFilter } from "../redux/selectors";

const mapStateToProps = state => ({
  todos: getTweetsByVisibilityFilter(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
