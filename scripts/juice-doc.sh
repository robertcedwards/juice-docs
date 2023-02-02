#! /bin/bash
#
# Generates docs for a Juicebox Solidity repository using `forge doc`.
# Run from root directory of repository which you wish to document.
# Update JUICE_DOCS_DIR before running.

JUICE_DOCS_DIR="/home/filipv/Workspace/juice-docs/"
CURRENT_DIR=$(basename $(pwd))

forge doc

mkdir -p "$JUICE_DOCS_DIR"/docs/dev/api/extensions/"$CURRENT_DIR"
mv docs/src/* "$JUICE_DOCS_DIR"/docs/dev/api/extensions/"$CURRENT_DIR"

cd "$JUICE_DOCS_DIR"/docs/dev/api/extensions/"$CURRENT_DIR"
grep -rl '](/' | xargs sed -i "s/](\//](\/dev\/api\/extensions\/$CURRENT_DIR\//g"
rm -rf SUMMARY.md contracts/forge-test contracts/scripts

echo -e "---\ntitle: $CURRENT_DIR\n---\n$(cat README.md)" > README.md

for DIR in "enums" "interfaces" "libraries" "structs"
do
  mv contracts/$DIR .
  echo -e "{\n  \"label\": \"${DIR^}\"\n}" > $DIR/_category_.json
  grep -rl "contracts/$DIR" | xargs sed -i "s/](\/dev\/api\/extensions\/$CURRENT_DIR\/contracts\/$DIR/](\/dev\/api\/extensions\/$CURRENT_DIR\/$DIR/g"
done

echo -e "{\n  \"label\": \"Contracts\"\n}" > contracts/_category_.json
echo -e "{\n  \"label\": \"Abstract\",\n  \"position\": 1\n}" > contracts/abstract/_category_.json
find -type f -name README.md ! -path './README.md' -delete

for SOL in $(find ~+ -name *.sol -type d)
do
  cd $SOL
  mv ./* ..
  rm -rf $SOL
done

cd "$JUICE_DOCS_DIR"/docs/dev/api/extensions/"$CURRENT_DIR"
grep -rl '/\w*.sol/' | xargs sed -i 's/\/\w*\.sol\//\//g'
