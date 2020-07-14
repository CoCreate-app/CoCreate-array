var arrayClass = 'arrayField';

initSocketsForArray();
initArrayForms();
//-23
function initSocketsForArray() {
  CoCreateSocket.listen('connect', function (data, room) {
    console.log('socket connected');
    if (room == CoCreateSocket.getGlobalScope()) {
      socketConnectedForArray();
    }
  })
  
  CoCreateSocket.listen('createDocument', function(data) {
    insertCreatedIdToArray(data);
  })
  
  CoCreateSocket.listen('readDocument', function(data) {
    fetchedDataForArray(data);
  })
  
  CoCreateSocket.listen('updateDocument', function(data) {
    fetchedDataForArray(data);
  })
  
  // CoCreateSocket.listen('fetchedModuleActivity', function (data) {
  //   fetchedDataForArray(data, 'module_activity');
  // });
  
  // CoCreateSocket.listen('fetchedModule', function(data) {
  //   fetchedDataForArray(data, data['data-collection']);
  // })
}

function initArrayForms() {
  var forms = document.querySelectorAll('form');
  
  for (var i=0; i<forms.length; i++) {
    var form = forms[i];
    
    initArrayTags(form);
  }
}

function initArrayTags(form) {
  var arrayTags = form.querySelectorAll('[data-array_name]');
  
  for (var i=0; i<arrayTags.length; i++) {
    var arrayTag = arrayTags[i];
    
    initArrayTag(form, arrayTag);
  }
}

function initArrayTag(form, arrayTag) {
  var real_time = form.getAttribute('data-realtime');
  var collection = form.getAttribute('data-collection') ? form.getAttribute('data-collection') : 'module_activity';
  
  
  if (real_time != 'false') {
    
    arrayTag.addEventListener('change', function(e) {
      e.preventDefault();
      var array_name = this.getAttribute('data-array_name');
      
      var value = getArrayValue(form, arrayTag);
      
      var id = collection == this.getAttribute('data-document_id');
      if (id) {
        CoCreate.updateDocument({
          'collection' : collection,
          'document_id': id,
          'data': {[array_name]: value},
          'metadata': ""
        });
      }
    })
    
    if (arrayTag.tagName != 'SELECT') {
      var checkboxs = arrayTag.querySelectorAll('input[type="checkbox"]');
      
      for (var i=0; i<checkboxs.length; i++) {
        var checkbox = checkboxs[i];
        
        checkbox.addEventListener('change', function(e) {
          e.preventDefault();
          //arrayTag.dispatchEvent(new Event('change'));
        })
      }
    }
  }
}

function socketConnectedForArray() {
  fetchArrays();
}



function insertCreatedIdToArray(data) {
  var form_id = data['element'];
  
  var form = document.querySelector("form[data-form_id='" + form_id + "']");
  
  if (form) {

    var arrayTags = form.getElementsByClassName('arrayField');
    var collection = form.getAttribute('data-collection');
  
    collection = collection ? collection : 'module_activity';
    
    for (var i=0; i < arrayTags.length; i++) {
      var arrayTag = arrayTags[i];
      var data_module_id = arrayTag.getAttribute('data-document_id');
      if (!data_module_id) {
        arrayTag.setAttribute('data-document_id', data['document_id']);
      }
    }
  }
}

function getArrayValue(form, arrayTag) {
  
  
  var arrayValue = [];
  
  
  if (arrayTag.tagName == 'SELECT') {
    var value = arrayTag.value;
    arrayValue.push(value);
  } else {
    
    var checkboxs = arrayTag.querySelectorAll('input[type="checkbox"]');
    for (var i=0; i<checkboxs.length; i++) {
      var checkbox = checkboxs[i];
      if (checkbox.checked) {
        var value = checkbox.value;
        arrayValue.push(value);
      }  
    }
    
    
  }
  
  
  console.log(arrayValue);
  return arrayValue;
}

function updateArray(form) {
  var collection = form.getAttribute('data-collection') || 'module_activity';
  var arrayTags = form.querySelectorAll('[data-array_name]');
  
  for (var i=0; i<arrayTags.length; i++) {
    
    var arrayTag = arrayTags[i];
    
    var array_name = arrayTag.getAttribute('data-array_name');
    var value = getArrayValue(form, arrayTag);
    
    var id = arrayTag.getAttribute('data-document_id');
    
    if (id) {
      CoCreate.updateDocument({
        'collection' : collection,
        'document_id': id,
        'data': {[array_name]: value},
        'metadata': ""
      });
    }
  }
}

function fetchedDataForArray(data) {
  var collection = data['collection'];
  
  var forms = document.querySelectorAll('form');
  
  for (var f=0; f<forms.length; f++) {
    var form = forms[f];
    var form_collection = form.getAttribute('data-collection') ? form.getAttribute('data-collection') : 'module_activity';
    
    if (form_collection != collection) continue;
    
    var arrayTags = form.querySelectorAll('[data-array_name]');
    
    for (var i=0; i<arrayTags.length; i++) {
      var arrayTag = arrayTags[i];
      
      var module_id = arrayTag.getAttribute('data-document_id');
      
      if (module_id === data['document_id']) {
        updateArrayData(arrayTag, data['data']);
      }
    }
  }
}

function updateArrayData(arrayTag, data) {
  
  var array_name = arrayTag.getAttribute('data-array_name');
  
  if (array_name in data) {
    var value = data[array_name];
    
    if (arrayTag.tagName == 'SELECT') {
        if (value.length > 0) {
          arrayTag.value = value[0] ; 
        } else {
          arrayTag.value = null;
        }
    } else {
      var checkboxs = arrayTag.querySelectorAll('input[type="checkbox"]');
      
      for (var i=0; i<checkboxs.length; i++) {
        var checkbox = checkboxs[i];
        if (value.indexOf(checkbox.value) > -1) {
          checkbox.checked = true;  
        } else {
          checkbox.checked = false;  
        }
      }
    }
  }
}

function fetchArrays() {
  var fetchArray = [];
  
  var forms = document.querySelectorAll('form');
  for (var f=0; f<forms.length; f++) {
    
    var form = forms[f];
    var data_collection = form.getAttribute('data-collection') ? form.getAttribute('data-collection') : 'module_activity';
    
    var arrayTags = form.querySelectorAll('[data-array_name]');
    
    for (var i=0; i<arrayTags.length; i++) {
      var arrayTag = arrayTags[i];
      
      var data_module_id = arrayTag.getAttribute('data-document_id');

      if (data_module_id) {
        var exist = false;
        
        for (var j=0; j < fetchArray.length; j++) {
          if (data_collection == fetchArray[j]['data-collection'] && data_module_id == fetchArray[j]['id']) {
            exist = true; continue;
          }
        }
        
        if (!exist) {
          fetchArray.push({
            'data-collection': data_collection,
            'id': data_module_id
          })
        }
      }
    }
  }
  
  fetchArray.forEach((item) => {
    CoCreate.readDocument({
      collection: item['data-collection'],
      document_id: item['id'],
      metadata: ''
    })
  })
}