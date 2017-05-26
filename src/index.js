
function updateCommentListView(comment) {
  let commentList = new CommentList()
  commentList.newComment(comment)
  $('#comment-list').html(commentList.render())
}



$(document).ready(function(){
  $('#note-form').submit(function (event) {
    event.preventDefault()
    if ($('#comment').val() === "") {
      $('#error').show()
    } else {
      $('#error').hide()
      updateCommentListView($('#comment').val())
    }
  })
})
