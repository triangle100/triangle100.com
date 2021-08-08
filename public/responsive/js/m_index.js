function main()
{
	console.log("loaded");
}

function redirect()
{
	setTimeout(() => {  console.log("redirecting..."); window.location.href = "m_index.html"; }, 3000);
}