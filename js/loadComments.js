async function loadComments(pageId) {
    let comments = []
    let result = ""
    let converter = new showdown.Converter();
    let comments_list = document.getElementById("comments-list")
    let issues_response = await fetch("https://api.github.com/repos/victorbnl/victorbnl.github.io/issues")
    if (issues_response.status != 200) {
        let explanation = ""
        if (issues_response.status == 403) {
            explanation = "You probably loaded this page to much times and passed the GitHub API rate limits"
        }
        comments_list.innerHTML += 
        `<li class="comment">
            <p class="comment_body">
                Failed to load comments because of : ${issues_response.status} ${issues_response.statusText}
            </p> 
            <p class="comment_body">
                ${explanation}
            </p>
        </li>`
    } else {
        let issues = await issues_response.json()
        for (let issue of issues) {
            if (issue.title == `Comment on ${pageId}`) {
                let author_response = await fetch(`https://api.github.com/users/${issue.user.login}`)
                let author = await author_response.json()
                let comment = {
                    author: author.name,
                    date: new Date(issue.created_at),
                    body: converter.makeHtml(issue.body),
                    issue_number: issue.number,
                    comments: []
                }
                let issue_comments_response = await fetch(issue.comments_url)
                let issue_comments = await issue_comments_response.json()
                console.log(issue_comments)
                for (let issue_comment of issue_comments) {
                    let user_response = await fetch(`https://api.github.com/users/${issue_comment.user.login}`);
                    let user = await user_response.json()
                    comment.comments.push({
                        author: user.name,
                        date: new Date(issue_comment.created_at),
                        body: converter.makeHtml(issue_comment.body)
                    })
                }
                comment.comments = comment.comments.sort((a, b) => {
                    return b.date - a.date
                })
                comments.push(comment)
            }
        }
        comments = comments.sort((a, b) => {
            return b.date - a.date
        });
        console.log(comments)
        for (let comment of comments) {
            let answers_string = "";
            for (let answer of comment.comments) {
                answers_string +=
                    `<li class='comment'>
                        <span class='comment-author'>
                            ${answer.author} 
                        </span>
                        <span class='comment-date'>
                            • ${answer.date.toDateString()}
                        </span>
                        <p class='comment-body'>
                            ${answer.body}
                        </p>
                    </li>`
            }
            comments_list.innerHTML += 
                `<li class='comment' markdown="1">
                    <span class='comment-author'>
                        ${comment.author} 
                    </span> 
                    <span class='comment-date'>
                        • ${comment.date.toDateString()}
                    </span>
                    <p class='comment-body'>
                        ${comment.body} 
                    </p>
                    <a href='https://github.com/victorbnl/victorbnl.github.io/issues/${comment.issue_number}' class='comment-answer-link'>Answer</a>
                    <a href='https://github.com/victorbnl/victorbnl.github.io/issues/${comment.issue_number}' class='comment-answer-link'>Issue</a>
                    <ul>
                        ${answers_string}
                    </ul>
                </li>`
        }
    }
}