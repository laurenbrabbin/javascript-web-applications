class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.repoData = '';
    
    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;
      
      console.log(`stored repo submit button: ${this.repoData}`)
      this.client.getRepoInfo(repoName, repoData => {
        this.repoData = repoData;
        this.display();
      });
    });
  }

  display() {
    document.getElementById('repo-name').innerText = this.repoData.name;
    document.getElementById('repo-description').innerText = this.repoData.description;
    document.getElementById('repo-image').src = this.repoData.organization.avatar_url;
  }
}

module.exports = GithubView;