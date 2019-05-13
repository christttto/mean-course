import { Component, EventEmitter, Output } from "@angular/core"
import { Post } from "../post.model"
<<<<<<< HEAD
import { NgForm } from "@angular/forms"
=======
>>>>>>> 6d032701398566a252d4a7251c5d8bc85d909a9a
@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredTitle = ""
  enteredContent = ""
  @Output() postCreated = new EventEmitter<Post>()

<<<<<<< HEAD
  onAddPost(form: NgForm) {
    const post: Post = {
      title: form.value.title,
      content: form.value.content
=======
  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
>>>>>>> 6d032701398566a252d4a7251c5d8bc85d909a9a
    }
    this.postCreated.emit(post)
  }
}
