<h3>Edit <%= a %> <%= b %></h1>
      <form>
        <div>
          <label for="item-a" >a:</label>
          <input id="item-a" name="a" type="text" value="<%= a %>"/>
        </div>
        <div>
          <label for="item-b" >b:</label>
          <input id="item-b" name="b" type="text" value="<%= b %>"/>
        </div>
        <div>
          <label for="item-c" >c:</label>
          <input id="item-c" name="c" type="text" value="<%= c %>"/>
        </div>
        <button class="btn js-submit">Save</button>
      </form>