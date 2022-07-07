<script>
    let buildNumber = 0;
    let buildTime = new Date().getTime();
    let buildDate = new Date().toISOString();

    const owner = "triangle100";
    const repo = "triangle100-com";
    const workflowId = "firebase-hosting-merge.yml";
    const url = `https://api.github.com/repos/${owner}/${repo}/actions`;

    const jobs = fetch(`${url}/workflows/${workflowId}/runs`)
        .then((response) => response.json())
        .then((data) => {
            const runId = data.workflow_runs[0].id;
            buildNumber = data.workflow_runs[0].run_number;

            return fetch(`${url}/runs/${runId}/jobs`);
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
        buildDate = createdAt.toISOString();
    });
</script>

<div>
    <code>
        Build: 1.0.{buildNumber} - Build Time: {buildTime} - Build Date: {buildDate}
    </code>
</div>
