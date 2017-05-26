class CommentList {
  constructor() {
    this.commentList = []
  }

  commentListHtml() {
    let comments = this.commentList.map(function(comment) {
      comment.render()
    })
    return comments.join('')
  }

  render() {
    return `<ul> ${this.commentListHtml()} </ul>`
  }

  newComment(comment) {
    const newComment = new Comment(comment)
    this.commentList.push(newComment)
  }

}
