import './jquery';
import './yearpicker';
import '../../css/utils/yearpicker.css';

let today = new Date();
let year = today.getFullYear();

$('.yearpicker').yearpicker({
  endYear: year,
});
