<script>
    let buildNumber = 0;
    let buildTime = new Date().getTime();
    let buildDate = new Date().toISOString();

    const owner = "triangle100";
    const repo = "triangle100-com";
    const workflowId = "firebase-hosting-merge.yml";
    const url = `https://api.github.com/repos/${owner}/${repo}/actions`;
    const reqInit = {
        method: "GET",
        headers: {
            Authorization: "token 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",
        },
    };

    const jobs = fetch(`${url}/workflows/${workflowId}/runs`, reqInit)
        .then((response) => response.json())
        .then((data) => {
            const runId = data.workflow_runs[0].id;
            buildNumber = data.workflow_runs[0].run_number;

            return fetch(`${url}/runs/${runId}/jobs`, reqInit);
        })
        .then((response) => response.json())
        .catch((err) => console.error(err));

    jobs.then((data) => {
        const steps = data.jobs[0].steps;
        const step = steps.filter((obj) => {
            return obj.name === "Run npm ci && npm run build";
        });
        const createdAt = new Date(step[0].completed_at);
        buildTime = createdAt.getTime();
    });

</script>

<div>
    <code>
        Build: {buildNumber} - Build Time: {buildTime} - Build Date: {new Date(
            buildTime
        ).toISOString()}
    </code>
</div>
