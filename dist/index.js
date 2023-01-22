#!/usr/bin/env node
import title from "./title.js";
import { create_project } from "./prompt.js";
await title();
create_project();
