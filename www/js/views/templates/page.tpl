<div data-role="header">
  <a href="#" data-transition="reverse slide" data-icon="back" class="back ui-btn-left" data-direction="reverse">Back</a>
  <h1>Local Stores</h1>
</div>
<div data-role="content">
  <ul data-filter="true" data-role="listview" data-theme="g">
    {{#each shops}}
    <li><a href="#store/{{this.id}}">{{this.name}}</a></li>
    {{/each}}
  </ul>
</div>
