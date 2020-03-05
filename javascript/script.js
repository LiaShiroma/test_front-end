
//Primeiro bloco
function validate() {
    var email = formuser.email.value;
    var password = formuser.password.value;

    if (email == "") {
        alert('Preencha o campo e-mail.');
        formuser.email.focus();
        return false;
    }

    if (password == "") {
        alert('Preencha o campo senha.');
        formuser.password.focus();
        return false;
    }
}

//Segundo Bloco
$(function () {
    $("input[type='radio']").click(function () {
        if ($("#option-cpf").is(":checked")) {
            $("#input-cpf").show();
        } else {
            $("#input-cpf").hide();
        }

        if ($("#option-cnpj").is(":checked")) {
            $("#input-cnpj").show();
        } else {
            $("#input-cnpj").hide();
        }
    });
});


//Terceiro Bloco
function valueTr(e) {

    var dados = ""

    var td = e.getElementsByTagName("td");


    for (var i = 0; i < td.length; i++) {
        dados += " " + td[i].textContent;

        if (i == 1) {
            dados += ",";
        }
    }
    document.querySelector("#textClick").innerHTML = dados;
};


//Quarto bloco
var registerButton = document.querySelector("#register-btn");
registerButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#register-form");

    var table = document.querySelector("#user-table");

    var user = getUserForm(form, table.rows.length);

    var userTr = createTr(user);

    table.appendChild(userTr);

    form.reset();



});

function getUserForm(form, row) {

    var user = {
        id: row + 1,
        name: form.name.value,
        lastname: form.lastname.value,
        age: form.age.value
    }
    return user;
}

function createTr(user) {
    var userTr = document.createElement("tr");
    userTr.classList.add("user");

    userTr.appendChild(createEl("th", user.id, ""));
    userTr.appendChild(createEl("td", user.name, "name-info"));
    userTr.appendChild(createEl("td", user.lastname, "lastname-info"));
    userTr.appendChild(createEl("td", user.age, "age-info"));

    return userTr;
}

function createEl(el, dado, classe) {
    var el = document.createElement(el);
    el.textContent = dado;

    if (classe) {
        el.classList.add(classe);
    } else {
        el.setAttribute('scope', 'row')
    }

    return el;

}


//Via Cep
var consultButtonCep = document.querySelector("#cep-consult-btn");
consultButtonCep.addEventListener("click", function (event) {
    var cep = $("#cep").val();

    $.get("https://viacep.com.br/ws/" + cep + "/json/", function (data) {

        $("#address").val(data.logradouro);
        $("#complement").val(data.complemento);
        $("#neighborhood").val(data.bairro);
        $("#city").val(data.localidade);

    });
});


//Cadastro ViaCep
var registerButtonCep = document.querySelector("#cep-register-btn");
registerButtonCep.addEventListener("click", function (event) {
    event.preventDefault();

    var formCep = document.querySelector("#cep-register-form");

    var tableCep = document.querySelector("#cep-table");

    var address = getCepForm(formCep, tableCep.rows.length);

    var addressTr = createTrAddress(address);

    tableCep.appendChild(addressTr);

    formCep.reset();



});

function getCepForm(form, row) {

    var address = {
        id: row + 1,
        cep: form.cep.value,
        address: form.address.value,
        complement: form.complement.value,
        neighborhood: form.neighborhood.value,
        city: form.city.value
    }
    return address;
}

function createTrAddress(address) {
    var addressTr = document.createElement("tr");
    addressTr.classList.add("endereco");

    addressTr.appendChild(createEl("th", address.id, ""));
    addressTr.appendChild(createEl("td", address.cep, "info-cep"));
    addressTr.appendChild(createEl("td", address.address, "info-address"));
    addressTr.appendChild(createEl("td", address.complement, "info-complement"));
    addressTr.appendChild(createEl("td", address.neighborhood, "info-neighborhood"));
    addressTr.appendChild(createEl("td", address.city, "info-city"));

    return addressTr;
}

function createEl(el, dado, classe) {
    var el = document.createElement(el);
    el.textContent = dado;

    if (classe) {
        el.classList.add(classe);
    } else {
        el.setAttribute('scope', 'row')
    }

    return el;

}


