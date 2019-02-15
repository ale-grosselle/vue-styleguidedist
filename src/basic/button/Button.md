Using as Vue Component:

```
    //import {Button} from "thron-ux-components";
    //Vue.use(Button);
    <div style="height: 100px; width: 100%;">
        <th-button>Click me</th-button>
    </div>
```

Using as Vanilla Component:
```html static
<div id="button" style="height: 100px; width: 100%;">
    <th-button>Click me</th-button>
</div>
<script>
    var Button = window.thronUxComponents.Button;
    window.thronUxComponents.InitComponent(
        [Button], //Component to use
        'button' //Dom where attach component
    );
</script>
```
