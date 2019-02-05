import { helper } from '@ember/component/helper';

export function plural(params, namedArgs) {
  let msg = namedArgs.text;

  if (namedArgs.value> 1){
    return `${msg}s`;
  }else{
    return `${msg}`;
  }
}

export default helper(plural);
