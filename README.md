<form action="#" class="form">
  <div class="form__name">
    <label for="name" class="input-label">cardholder name</label>
    <div class="input-wrapper">
      <input type="text" name="name" id="name" class="input" placeholder="e.g. Jane Appleseed" maxlength="20" required>
    </div>
  </div>
  <div class="form__number">
    <label for="number" class="input-label">Card Number</label>
    <div class="input-wrapper">
      <input type="text" name="number" id="number" class="input" placeholder="e.g. 1234 5678 9123 0000" maxlength="16" required>
    </div>
  </div>

  <div class="form__date">
    <div class="ex__date">
      <label for="expiredDate" class="input-label">Exp. Date (MM/YY)</label>
      <div class="ex__date__input__wrapper input-wrapper">
        <input type="text" name="expiredDate" id="month" class="input" placeholder="MM" maxlength="2" required>
        <input type="text" name="expiredDate" id="year" class="input" placeholder="YY" maxlength="2" required>
      </div>
    </div>
    <div class="cv">
      <label for="expiredDate" class="input-label">CVC</label>
      <div class="input-wrapper">
        <input type="text" name="expiredDate" id="cv" class="input" placeholder="e.g. 123" maxlength="3" required>
      </div>
    </div>
  </div>
  <button type="submit" class="btn">Confirm</button>
</form>