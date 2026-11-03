#MISE description="run typescript type checking"

bun vue-tsc --noEmit -p . "$@"
