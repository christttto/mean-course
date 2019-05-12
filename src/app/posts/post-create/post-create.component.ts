import { Component } from "@angular/core"

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html"
})
export class PostCreateComponent {
  newPost = "No content"
  onAddPost() {
    alert("Post added!")
    this.newPost = "The user's post"
  }
}
