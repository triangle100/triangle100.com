<script>
    let buildNumber = "";
    let buildTime = 0;

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
            buildNumber = `1.0.${data.workflow_runs[0].run_number}.`;

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
        buildNumber += date2Build(createdAt);
    });

    function date2Build(date) {
        const midnight = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
        const year = date.getUTCFullYear().toString().slice(-2);
        const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
        const day = ("0" + date.getUTCDate()).slice(-2);
        const minute2 = ("000" + Math.floor((date.getTime() - midnight.getTime()) / 1000 / 60 / 2)).slice(-3);

        return `${year}${month}${day}${minute2}`;
    }
</script>

<div>
    <code>
        Build: {buildNumber} - Build Time: {buildTime} - Build Date: {new Date(
            buildTime
        ).toISOString()}
    </code>
</div>
