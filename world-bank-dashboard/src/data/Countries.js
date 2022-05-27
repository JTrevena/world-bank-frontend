import { Client } from "https://deno.land/x/postgres@v0.11.3/mod.ts";
import { writeJson } from "https://deno.land/x/jsonfile/mod.ts";

const WORLD_BANK_PATH =
  "postgres://czreijar:TJ2StTuQIl2CoRoinQTwPxk8pBGfdf6t@kandula.db.elephantsql.com/czreijar";

const worldBankDB = new Client(WORLD_BANK_PATH);
await worldBankDB.connect();

async function gettingCountries() {
  const results = (
    await worldBankDB.queryObject(
      "SELECT DISTINCT CountryName FROM indicators;"
    )
  ).rows;
  writeJson("./countries.json", { results });
}

gettingCountries();