<div data-role="header">
  <a data-role="button" data-direction="reverse" data-rel="back" href="#" data-icon="arrow-l" data-iconpos="left">Back</a>
  <h1>Local Stores</h1>
</div>
<div data-role="content">
  <ul data-filter="true" data-role="listview" data-theme="g">
    {{#each shops}}
    <li><a href="#store/{{this.id}}/1">{{this.name}}</a></li>
    {{/each}}
  </ul>
</div>
