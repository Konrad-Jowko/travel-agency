import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeTags, changeDurationTo, changeDurationFrom} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeTags: tags => dispatch(changeTags(tags)),
  changeDurationTo: value => dispatch(changeDurationTo(value)),
  changeDurationFrom: value => dispatch(changeDurationFrom(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
