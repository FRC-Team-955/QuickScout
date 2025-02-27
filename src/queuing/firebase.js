import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// probably useless attempt at preventing bots from finding the config
const firebaseConfig = JSON.parse(
	atob(
		"eyJhcGlLZXkiOiJBSXphU3lEdlo1VXFsZmg" +
			"5ZTI2NUN6Sms0OFBGSmhyS0V1alQ5NzAiLC" +
			"JhdXRoRG9tYWluIjoicXVpY2tzY291dC1kN" +
			"GQxYS5maXJlYmFzZWFwcC5jb20iLCJkYXRh" +
			"YmFzZVVSTCI6Imh0dHBzOi8vcXVpY2tzY29" +
			"1dC1kNGQxYS1kZWZhdWx0LXJ0ZGIuZmlyZW" +
			"Jhc2Vpby5jb20iLCJwcm9qZWN0SWQiOiJxd" +
			"Wlja3Njb3V0LWQ0ZDFhIiwic3RvcmFnZUJ1" +
			"Y2tldCI6InF1aWNrc2NvdXQtZDRkMWEuZml" +
			"yZWJhc2VzdG9yYWdlLmFwcCIsIm1lc3NhZ2" +
			"luZ1NlbmRlcklkIjoiODI0MDY5ODk2OTkwI" +
			"iwiYXBwSWQiOiIxOjgyNDA2OTg5Njk5MDp3" +
			"ZWI6YjE1Y2ZiZjBjOTFhYzIxMTFiYTcwZiJ9",
	),
);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
