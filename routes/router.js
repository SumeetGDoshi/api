const express = require('express')
const router = express.Router();

//const Auth = require('../controllers/Auth')
const productdetail = require('../controllers/productdetailcontroller');
const countrydetail = require('../controllers/countrylistcontroller');
const servicedetail = require('../controllers/servicedetailscontroller')
const goodsdetail = require('../controllers/goodscontroller');
const profiledetail = require('../controllers/profiledetailcontroller');
const addtocartdetail = require('../controllers/addtocartcontroller');
const shipdetail = require('../controllers/shipmentcontroller')
const gatewaydetail = require('../controllers/gatewaydetailscontroller');
const stripedetails = require('../controllers/stripecontroller');
const livestream = require('../controllers/livestreamcontroller');
const invoicefinalDetails = require('../controllers/invoicecontroller');
const localservice = require('../controllers/localservicecontroller');
const onlineservice = require('../controllers/onlineservicecontroller');
const liveservice = require('../controllers/liveservicecontroller');



router.get('/', (req, res) => {
    res.json({
        message: "Welcome to Shoclef"
    })
})

// router.use(Auth.VerifyToken)

/**
 * @swagger
 * definition:
 *   Countrydetails:
 *     properties:
 *       sortname:
 *         type: string
 *       name:
 *         type: string
 *       phonecode:
 *         type: string
 */

/**
 * @swagger
 * /countrydetails/create:
 *   post:
 *     tags:
 *       - Countrydetails
 *     description: Creates Country List
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Countrydetails
 *         description: Countrydetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Countrydetails'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/countrydetails/create', countrydetail.addCountryDetails)

/**
 * @swagger
 * /countrydetails/getalldetails:
 *   get:
 *     tags:
 *       - Countrydetails
 *     description: Get List of Country
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Country Details
 *         schema:
 *           $ref: '#/definitions/Countrydetails'
 * 
 */


router.get('/countrydetails/getalldetails', countrydetail.getAllDetails)


/**
 * @swagger
 * definition:
 *   LiveServiceDetails:
 *     properties:
 *       service_id:
 *         type: integer
 *       provider_id:
 *         type: integer
 *       category_id:
 *         type: integer
 *       service_name:
 *         type: string
 *       address:
 *         type: string
 *       latitude:
 *         type: string
 *       longitude:
 *         type: string
 *       pincode:
 *         type: string
 *       cover_imagepath:
 *         type: string
 *       description:
 *         type: string
 *       availability_days:
 *         type: string
 *       available_starttime:
 *         type: string
 *       available_endtime:
 *         type: string
 *       duration:
 *         type: string
 *       currency_code:
 *         type: string
 *       stream_rate_permin:
 *         type: string
 *       status_code:
 *         type: integer
 *       created_date:
 *         type: string
 *       created_by:
 *         type: integer
 */



/**
 * @swagger
 * /servicedetails/addLiveServiceInitialDetails:
 *   post:
 *     tags:
 *       - LiveServiceDetails
 *     description: Insert LiveServices Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ServiceDetails
 *         description: ServiceDetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/LiveServiceDetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/servicedetails/addLiveServiceInitialDetails', servicedetail.addLiveServiceDetails)

/**
 * @swagger
 * /servicedetails/getLiveServiceDetails:
 *   get:
 *     tags:
 *       - LiveServiceDetails
 *     description: Get Details of Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of LiveService Details
 *         schema:
 *           $ref: '#/definitions/LiveServiceDetails'
 * 
 */


router.get('/servicedetails/getLiveServiceDetails', servicedetail.getLiveServiceDetails)

/**
 * @swagger
 * /servicedetails/getLiveServiceDetailsById:
 *   get:
 *     tags:
 *       - LiveServiceDetails
 *     description: Get Details of LiveServices On The basis of service and provider ids 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: service_id
 *         description: Service Id
 *         in: query
 *         required: false
 *         type: string
 *       - name: category_id
 *         description: Category id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of LiveServices Details
 *         schema:
 *           $ref: '#/definitions/getLiveServiceDetailsById'
 * 
 */

router.get('/servicedetails/getLiveServiceDetailsById', servicedetail.getLiveServiceDetailsById)


/**
 * @swagger
 * /liveservice/getServiceCategoryList:
 *   get:
 *     tags:
 *       - LiveServiceDetails
 *     description: Get List of Live Services Category
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Category Details
 *         schema:
 *           $ref: '#/definitions/getServiceCategoryList'
 * 
 */


router.get('/liveservice/getServiceCategoryList', liveservice.getServiceCategoryList)



/**
 * @swagger
 * definition:
 *   OnlineServiceDetails:
 *     properties:
 *       service_id:
 *         type: integer
 *       provider_id:
 *         type: integer
 *       category_id:
 *         type: integer
 *       service_name:
 *         type: string
 *       address:
 *         type: string
 *       latitude:
 *         type: string
 *       longitude:
 *         type: string
 *       pincode:
 *         type: string
 *       cover_imagepath:
 *         type: string
 *       description:
 *         type: string
 *       availability_days:
 *         type: string
 *       available_starttime:
 *         type: string
 *       available_endtime:
 *         type: string
 *       duration:
 *         type: string
 *       currency_code:
 *         type: string
 *       stream_rate_permin:
 *         type: string
 *       status_code:
 *         type: integer
 *       created_date:
 *         type: string
 *       created_by:
 *         type: integer
 */



/**
 * @swagger
 * /servicedetails/addOnlineServiceInitialDetails:
 *   post:
 *     tags:
 *       - OnlineServiceDetails
 *     description: Insert OnlineServices Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: OnlineServiceDetails
 *         description: ServiceDetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/OnlineServiceDetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/servicedetails/addOnlineServiceInitialDetails', servicedetail.addOnlineServiceDetails)



/**
 * @swagger
 * /onlineservice/getOnlineServiceList:
 *   get:
 *     tags:
 *       - OnlineServiceDetails
 *     description: Get List of Online Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/OnlineServiceList'
 * 
 */


router.get('/onlineservice/getOnlineServiceList', onlineservice.getOnlineServiceDetails)


/**
 * @swagger
 * /onlineservice/getServiceCategoryList:
 *   get:
 *     tags:
 *       - OnlineServiceDetails
 *     description: Get List of  Services Category
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Category Details
 *         schema:
 *           $ref: '#/definitions/getServiceCategoryList'
 * 
 */


router.get('/onlineservice/getServiceCategoryList', onlineservice.getServiceCategoryList)


/**
 * @swagger
 * /onlineservice/getOnlineServiceDetailsById:
 *   get:
 *     tags:
 *       - OnlineServiceDetails
 *     description: Get Details of Services On The basis of service and provider ids
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: service_list_id
 *         description: Service list Id for details
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/getOnlineServiceDetailsById'
 * 
 */


router.get('/onlineservice/getOnlineServiceDetailsById', onlineservice.getOnlineServiceDetailsById)





/**
 * @swagger
 * /servicedetails/getOnlineServiceDetails:
 *   get:
 *     tags:
 *       - OnlineServiceDetails
 *     description: Get Details of Online Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of OnlineService Details
 *         schema:
 *           $ref: '#/definitions/getOnlineServiceDetails'
 * 
 */


router.get('/servicedetails/getOnlineServiceDetails', servicedetail.getOnlineServiceDetails)



/**
 * @swagger
 * definition:
 *   LocalServiceDetails:
 *     properties:
 *       service_id:
 *         type: integer
 *       provider_id:
 *         type: integer
 *       category_id:
 *         type: integer
 *       service_name:
 *         type: string
 *       address:
 *         type: string
 *       latitude:
 *         type: string
 *       longitude:
 *         type: string
 *       pincode:
 *         type: string
 *       cover_imagepath:
 *         type: string
 *       description:
 *         type: string
 *       availability_days:
 *         type: string
 *       available_starttime:
 *         type: string
 *       available_endtime:
 *         type: string
 *       duration:
 *         type: string
 *       currency_code:
 *         type: string
 *       stream_rate_permin:
 *         type: string
 *       status_code:
 *         type: integer
 *       created_date:
 *         type: string
 *       created_by:
 *         type: integer
 */



/**
 * @swagger
 * /servicedetails/addLocalServiceInitialDetails:
 *   post:
 *     tags:
 *       - LocalServiceDetails
 *     description: Insert LocalServices Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: LocalServiceDetails
 *         description: ServiceDetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/LocalServiceDetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/servicedetails/addLocalServiceInitialDetails', servicedetail.addLocalServiceDetails)


/**
 * @swagger
 * /localservice/getLocalServiceList:
 *   get:
 *     tags:
 *       - LocalServiceDetails
 *     description: Get List of Local Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/getLocalServiceList'
 * 
 */


router.get('/localservice/getLocalServiceList', localservice.getLocalServiceDetails)



/**
 * @swagger
 * /localservice/getServiceCategoryList:
 *   get:
 *     tags:
 *       - LocalServiceDetails
 *     description: Get List of Local Services Category
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Category Details
 *         schema:
 *           $ref: '#/definitions/getServiceCategoryList'
 * 
 */


router.get('/localservice/getServiceCategoryList', localservice.getServiceCategoryList)


/**
 * @swagger
 * /localservice/getLocalServiceDetailsById:
 *   get:
 *     tags:
 *       - LocalServiceDetails
 *     description: Get Details of Services On The basis of service and provider ids
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: service_list_id
 *         description: Service list Id for details
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/getLocalServiceDetailsById'
 * 
 */


router.get('/localservice/getLocalServiceDetailsById', localservice.getLocalServiceDetailsById)




/**
 * @swagger
 * /localservice/getLocalServiceDetailsByPincode:
 *   get:
 *     tags:
 *       - LocalServiceDetails
 *     description: Get Details of Services On The basis of pincode
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: serving_areas_pincode
 *         description: Pincode of servicable areas
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/getLocalServiceDetailsByPincode'
 * 
 */


router.get('/localservice/getLocalServiceDetailsByPincode', localservice.getLocalServiceDetailsByPincode)





/**
 * @swagger
 * /servicedetails/getLocalServiceDetails:
 *   get:
 *     tags:
 *       - LocalServiceDetails
 *     description: Get Details of Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/getLocalServiceDetails'
 * 
 */


router.get('/servicedetails/getLocalServiceDetails', servicedetail.getLocalServiceDetails)




/**
 * @swagger
 * /servicedetails/getallservicelist:
 *   get:
 *     tags:
 *       - Servicedetails
 *     description: Get Details of Services
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ParentId
 *         description: parent Id
 *         in: query
 *         required: false
 *         type: string
 *       - name: ServiceId
 *         description: service id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Registration Details
 * 
 */


router.get('/servicedetails/getallservicelist', servicedetail.getAllDetails)



/**
 * @swagger
 * definition:
 *   LocalServiceBooking:
 *     properties:
 *       service_det_id:
 *         type: integer
 *       buyer_id:
 *         type: integer
 *       invoice_no:
 *         type: integer
 *       invoice_prefix:
 *         type: string
 *       customer_address_id:
 *         type: integer
 *       service_total_price:
 *         type: string
 *       currency_code:
 *         type: string
 *       tax_rate:
 *         type: string
 *       tax_rate_type:
 *         type: string
 *       payment_provider_id:
 *         type: integer
 *       payment_method:
 *         type: string
 *       payment_transaction_id:
 *         type: integer
 *       payment_type:
 *         type: integer
 *       payment_status:
 *         type: string
 *       package_id:
 *         type: integer
 *       service_status:
 *         type: string
 *       completion_status:
 *         type: string
 *       requested_date:
 *         type: string
 *       requested_day:
 *         type: integer
 *       requested_start_time:
 *         type: integer
 *       created_date:
 *         type: integer
 *       modified_date:
 *         type: string
 */



/**
 * @swagger
 * /servicebooking/createLocalServiceBooking:
 *   post:
 *     tags:
 *       - LocalServiceBooking
 *     description: Creates Service Booking
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ServiceBooking
 *         description: Local ServiceBooking object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/LocalServiceBooking'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/servicebooking/createLocalServiceBooking', localservice.addLocalServiceBooking)


/**
 * @swagger
 * /servicebooking/getallBookedLocalServiceDetails:
 *   get:
 *     tags:
 *       - LocalServiceBooking
 *     description: Get Details of Booked Local Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/LocalServiceBooking'
 * 
 */


router.get('/servicebooking/getallBookedLocalServiceDetails', localservice.getAllLocalServiceBooking)

/**
 * @swagger
 * /servicebooking/getBookedLocalServiceSchedule:
 *   get:
 *     tags:
 *       - LocalServiceBooking
 *     description: Get Details of Booked Local Services
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: requested_start_time
 *         description: Start time of service
 *         in: query
 *         required: false
 *         type: string
 *       - name: requested_date
 *         description: date of service booking
 *         in: query
 *         required: false
 *         type: string
 *       - name: service_det_id
 *         description: service details id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Schedule of Booked Service Details
 *         schema:
 *           $ref: '#/definitions/LocalServiceBooking'
 * 
 */


router.get('/servicebooking/getBookedLocalServiceSchedule', localservice.getLocalServiceBookingSchedule)

/**
 * @swagger
 * /servicebooking/getBookedServiceInvoice:
 *   get:
 *     tags:
 *       - LocalServiceBooking
 *     summary: Get Invoice of user using ServiceId
 *     description: Get Details of invoice
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User Id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of invoice
 *         schema:
 *           $ref: '#/definitions/getBookedServiceInvoice'
 * 
 */

router.get('/servicebooking/getBookedServiceInvoice', invoicefinalDetails.invoiceDetail)

/**
 * @swagger
 * definition:
 *   LiveServiceBooking:
 *     properties:
 *       CreatedTime:
 *         type: string
 *       DeleteStatus:
 *         type: string
 *       ActiveStatus:
 *         type: string
 *       PickServiceDate:
 *         type: string
 *       PickServiceTime:
 *         type: string
 *       Location:
 *         type: string
 *       Latitude:
 *         type: string
 *       Longitude:
 *         type: string
 *       ServiceCharge:
 *         type: string
 *       ServiceID:
 *         type: integer
 *       CLientID:
 *         type: integer
 *       Rating:
 *         type: string
 */



/**
 * @swagger
 * /servicebooking/createLiveServiceBooking:
 *   post:
 *     tags:
 *       - LiveServiceBooking
 *     description: Creates Service Booking
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ServiceBooking
 *         description: Live ServiceBooking object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/LiveServiceBooking'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/servicebooking/createLiveServiceBooking', servicedetail.addLiveServiceBooking)


/**
 * @swagger
 * /servicebooking/getallBookedLiveServiceDetails:
 *   get:
 *     tags:
 *       - LiveServiceBooking
 *     description: Get Details of Booked Live Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/LiveServiceBooking'
 * 
 */


router.get('/servicebooking/getallBookedLiveServiceDetails', servicedetail.getAllLiveServiceBooking)




/**
 * @swagger
 * definition:
 *   OnlineServiceBooking:
 *     properties:
 *       service_det_id:
 *         type: integer
 *       buyer_id:
 *         type: integer
 *       invoice_no:
 *         type: integer
 *       invoice_prefix:
 *         type: string
 *       customer_address_id:
 *         type: integer
 *       service_total_price:
 *         type: string
 *       currency_code:
 *         type: string
 *       tax_rate:
 *         type: string
 *       tax_rate_type:
 *         type: string
 *       payment_provider_id:
 *         type: integer
 *       payment_method:
 *         type: string
 *       payment_transaction_id:
 *         type: integer
 *       payment_type:
 *         type: integer
 *       payment_status:
 *         type: string
 *       package_id:
 *         type: integer
 *       service_status:
 *         type: string
 *       completion_status:
 *         type: string
 *       requested_date:
 *         type: string
 *       requested_day:
 *         type: integer
 *       requested_start_time:
 *         type: integer
 *       requested_end_time:
 *         type: string
 *       created_date:
 *         type: integer
 *       modified_date:
 *         type: string
 */



/**
 * @swagger
 * /servicebooking/createOnlineServiceBooking:
 *   post:
 *     tags:
 *       - OnlineServiceBooking
 *     description: Creates Service Booking
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ServiceBooking
 *         description: Online ServiceBooking object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/OnlineServiceBooking'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/servicebooking/createOnlineServiceBooking', onlineservice.addOnlineServiceBooking)


/**
 * @swagger
 * /servicebooking/getallBookedOnlineServiceDetails:
 *   get:
 *     tags:
 *       - OnlineServiceBooking
 *     description: Get Details of Booked Online Services
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Service Details
 *         schema:
 *           $ref: '#/definitions/OnlineServiceBooking'
 * 
 */


router.get('/servicebooking/getallBookedOnlineServiceDetails', onlineservice.getAllOnlineServiceBooking)

/**
 * @swagger
 * /servicebooking/getBookedOnlineServiceSchedule:
 *   get:
 *     tags:
 *       - OnlineServiceBooking
 *     description: Get Details of Booked Local Services
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: requested_start_time
 *         description: Start time of service
 *         in: query
 *         required: false
 *         type: string
 *       - name: requested_end_time
 *         description: service end time
 *         in: query
 *         required: false
 *         type: string
 *       - name: requested_date
 *         description: date of service booking
 *         in: query
 *         required: false
 *         type: string
 *       - name: service_det_id
 *         description: service details id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Schedule of Booked Service Details
 *         schema:
 *           $ref: '#/definitions/OnlineServiceBooking'
 * 
 */


router.get('/servicebooking/getBookedOnlineServiceSchedule', onlineservice.getOnlineServiceBookingSchedule)



/**
 * @swagger
 * definition:
 *   StreamProducts:
 *     properties:
 *       ProductID:
 *         type: integer
 *       StreamID:
 *         type: integer
 *       ProductName:
 *         type: string
 *       Brand:
 *         type: string
 *       Category:
 *         type: integer
 *       SubCategory:
 *         type: integer
 *       Location:
 *         type: string
 *       Description:
 *         type: string
 *       Price:
 *         type: number
 *       DiscountPrice:
 *         type: number
 *       KeyWords:
 *         type: string
 *       DeleteStatus:
 *         type: string
 *       Weight:
 *         type: string
 *       Quantity:
 *         type: integer
 *       Length:
 *         type: string
 *       Width:
 *         type: string
 *       Height:
 *         type: string
 *       ActiveStatus:
 *         type: string
 *       CreatedTime:
 *         type: string
 *       SchedualStreamId:
 *         type: integer
 */


/**
 * @swagger
 * /streamproduct/create:
 *   post:
 *     tags:
 *       - StreamProducts
 *     description: Creates Stream Products
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: StreamProducts
 *         description: StreamProducts object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/StreamProducts'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/streamproduct/create', productdetail.addStreamProducts)


/**
 * @swagger
 * /streamproduct/getalldetails:
 *   get:
 *     tags:
 *       - StreamProducts
 *     description: Get Details of Stream Products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Stream Products Details
 *         schema:
 *           $ref: '#/definitions/StreamProducts'
 * 
 */


router.get('/streamproduct/getalldetails', productdetail.getstreamproducts)

/**
 * @swagger
 * /productdetails/getProductMapping:
 *   get:
 *     tags:
 *       - Products  & Category Mapping
 *     summary: Get Product Mapping
 *     description: Get Details of Products
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ParentId
 *         description: ParentId
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Products
 *         schema:
 *           $ref: '#/definitions/Products  & Category Mapping'
 * 
 */
router.get('/productdetails/getProductMapping',productdetail.getProductDetails);
/**
 * @swagger
 * /productdetails/getCategoryMapping:
 *   get:
 *     tags:
 *       - Products  & Category Mapping
 *     summary: Get Category Mapping
 *     description: Get Details of Category Mapping
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ParentId
 *         description: ParentId
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Details of Category Mapping
 *         schema:
 *           $ref: '#/definitions/Products  & Category Mapping'
 * 
 */
router.get('/productdetails/getCategoryMapping',productdetail.getCategoryDetails);

/**
 * @swagger
 * definition:
 *   GoodsDetails:
 *     properties:
 *       GoodsImageUrl:
 *         type: string
 *       GoodsProductName:
 *         type: string
 *       GoodsPrice:
 *         type: string
 *       GoodsDisountedPrice:
 *         type: string
 *       GoodsDiscountedPercentage:
 *         type: string
 *       GoodsRating:
 *         type: string
 *       GoodsBought:
 *         type: string
 */



/**
 * @swagger
 * /gooddetails/create:
 *   post:
 *     tags:
 *       - GoodsDetails
 *     description: Creates goods listing Products
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: GoodsDetails
 *         description: GoodsDetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/GoodsDetails'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/gooddetails/create', goodsdetail.addListing)


/**
 * @swagger
 * /gooddetails/getgoodslisting:
 *   get:
 *     tags:
 *       - GoodsDetails
 *     description: Get Details of Goods Listing
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Goods listing Details
 *         schema:
 *           $ref: '#/definitions/GoodsDetails'
 * 
 */
router.get('/gooddetails/getgoodslisting', goodsdetail.getListing)




/**
 * @swagger
 * definition:
 *   ProfilesDetails:
 *     properties:
 *       fullname:
 *         type: string
 *       user_id:
 *         type: integer
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /profiledetail/updatedetails:
 *   post:
 *     tags:
 *       - ProfilesDetails
 *     description: Update Profile Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ProfilesDetails
 *         description: ProfilesDetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ProfilesDetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.post('/profiledetail/updatedetails', profiledetail.updateDetails)



/**
 * @swagger
 * definition:
 *   AddtoCart:
 *     properties:
 *       user_id:
 *         type: number
 *       productId:
 *         type: number
 *       product_color:
 *         type: string
 *       product_size:
 *         type: string
 *       product_weight:
 *         type: string
 *       product_height:
 *         type: string
 *       original_price:
 *         type: string
 *       discounted_price:
 *         type: string
 *       currency_code:
 *         type: string
 *       cart_qty:
 *         type: integer
 *       cart_total_price:
 *         type: number
 */


/**
 * @swagger
 * /addtocart/addDetails:
 *   post:
 *     tags:
 *       - AddtoCart
 *     description: Update AddtoCart Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: AddtoCart
 *         description: AddtoCart object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/AddtoCart'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/addtocart/addDetails', addtocartdetail.addtocart)



/**
 * @swagger
 * /addtocart/getCartDetails:
 *   get:
 *     tags:
 *       - AddtoCart
 *     description: Get Details of Cart
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: user Id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Get Cart Details
 */

router.get('/addtocart/getCartDetails', addtocartdetail.getCartDetails)


/**
 * @swagger
 * /addtocart/deleteCartDetails:
 *   get:
 *     tags:
 *       - AddtoCart
 *     description: Delete Details of Cart
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: user Id
 *         in: query
 *         required: false
 *         type: string
 *       - name: productId
 *         description: Product Id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Delete Cart Details
 */

router.get('/addtocart/deleteCartDetails', addtocartdetail.deleteCartDetails);


/**
 * @swagger
 * /addtocart/updateCartDetails:
 *   get:
 *     tags:
 *       - AddtoCart
 *     description: Update Details of Cart
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: user Id
 *         in: query
 *         required: false
 *         type: string
 *       - name: productId
 *         description: Product Id
 *         in: query
 *         required: false
 *         type: string
 *       - name: cart_qty
 *         description: cart quantity
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Delete Cart Details
 */
router.get('/addtocart/updateCartDetails', addtocartdetail.updateCartDetails);


/**
 * @swagger
 * definition:
 *   Shipdetails:
 *     properties:
 *       user_id:
 *         type: number
 *       address_name:
 *         type: string
 *       street_name:
 *         type: string
 *       postcode:
 *         type: string
 *       phone_number:
 *         type: string
 *       email:
 *         type: string
 *       country_id:
 *         type: integer
 *       state_id:
 *         type: integer
 *       city_id:
 *         type: integer
 *       primary_address:
 *         type: integer
 */


/**
 * @swagger
 * /shipdetails/addAddressDetails:
 *   post:
 *     tags:
 *       - Shipdetails
 *     description: Add ShipAddress Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Shipdetails
 *         description: Shipdetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Shipdetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/shipdetails/addAddressDetails', shipdetail.shipAddressDetails)


/**
 * @swagger
 * /shipdetails/getShipAddressDetailsById:
 *   get:
 *     tags:
 *       - Shipdetails
 *     description: Get Details of Shipping Address By User Id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User Id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Address
 *         schema:
 *           $ref: '#/definitions/Shipdetails'
 * 
 */

router.get('/shipdetails/getShipAddressDetailsById', shipdetail.getShipAddressDetailsById)

/**
 * @swagger
 * /shipdetails/getCountry:
 *   get:
 *     tags:
 *       - Shipdetails
 *     description: Get Details of Shipping Address
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Address
 *         schema:
 *           $ref: '#/definitions/Shipdetails'
 * 
 */
router.get('/shipdetails/getCountry',shipdetail.getCountries);

/**
 * @swagger
 * /shipdetails/getStates:
 *   get:
 *     tags:
 *       - Shipdetails
 *     summary: Get States using Country_id
 *     description: Get Details of Address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: country_id
 *         description: country_id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Address
 */

router.get('/shipdetails/getStates',shipdetail.getState)

/**
 * @swagger
 * /shipdetails/getCities:
 *   get:
 *     tags:
 *       - Shipdetails
 *     summary: Get Cities using state_id
 *     description: Get Details of Address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: state_id
 *         description: state_id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Address
 */
router.get('/shipdetails/getCities',shipdetail.getCities)



/**
 * @swagger
 * /addtocart/deleteShipAddressDetails:
 *   delete:
 *     tags:
 *       - AddtoCart
 *     description: Delete Address Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: user Id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Delete Address Details
 */


router.delete('/shipdetails/deleteShipAddressDetails', shipdetail.deleteShipAddressDetails)

/**
 * @swagger
 * definition:
 *   Shippingdetails:
 *     properties:
 *       productoption:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *              productId:
 *                  type: string
 *              quantity:
 *                  type: string
 *       country:
 *         type: string
 *       currency_code:
 *         type: string
 */


/**
 * @swagger
 * /shippingdetails/shipment:
 *   post:
 *     tags:
 *       - Shippingdetails
 *     description: Add ShipAddress Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Shippingdetails
 *         description: Shippingdetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Shippingdetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */

router.post('/shippingdetails/shipment', shipdetail.shipmentFinalDetails)


/**
 * @swagger
 * definition:
 *   checkoutdetails:
 *     properties:
 *       user_id:
 *         type: string
 *       customer_address_id:
 *         type: string
 *       payment_provider_id:
 *         type: string
 *       product_cnt:
 *         type: string
 *       payment_method:
 *         type: string
 *       shipping_carrier_company:
 *         type: string
 *       shipping_amt:
 *         type: string
 *       shipping_currency:
 *         type: string 
 *       commit_days:
 *         type: string
 *       shipping_code:
 *         type: string
 *       order_total_price:
 *         type: string
 *       currency_code:
 *         type: string
 *       payment_transaction_id:
 *         type: string
 *       payment_type:
 *         type: string
 *       country_code:
 *         type: string
 *       phone_number:
 *         type: string
 *       cart_product_details:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *              cart_id:
 *                type: string
 *              product_id:
 *                type: string
 *              product_color:
 *                type: string
 *              product_size:
 *                type: string
 *              product_weight:
 *                type: string
 *              product_height:
 *                type: string
 *              original_price:
 *                type: string
 *              currency_code:
 *                type: string
 *              discounted_price:
 *                type: string
 *              total:
 *                type: string
 *              tax:
 *                type: string
 *              quantity:
 *                type: string
 */

/**
 * @swagger
 * /shippingdetails/checkout:
 *   post:
 *     tags:
 *       - checkoutdetails
 *     summary: Enter phone number with country code. Example +91
 *     description: Add ShipAddress Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: checkoutdetails
 *         description: checkoutdetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/checkoutdetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/shippingdetails/checkout', shipdetail.finalCheckOut)


/**
 * @swagger
 * definition:
 *   Updatecheckoutdetails:
 *     properties:
 *       user_id:
 *         type: string
 *       order_id:
 *         type: string
 *       payment_transaction_id:
 *         type: string
 *       payment_type:
 *         type: string
 *       payment_status:
 *         type: string
 *       payment_method:
 *         type: string
 *       shippment_status_id:
 *         type: string
 */

/**
 * @swagger
 * /shippingdetails/updatecheckout:
 *   post:
 *     tags:
 *       - Updatecheckoutdetails
 *     description: Update ShipAddress Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Updatecheckoutdetails
 *         description: checkoutdetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Updatecheckoutdetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/shippingdetails/updatecheckout', shipdetail.UpdateCheckOut)


/**
 * @swagger
 * definition:
 *   Carddetails:
 *     properties:
 *       user_id:
 *         type: number
 *       card_type:
 *         type: string
 *       name_on_card:
 *         type: string
 *       card_number:
 *         type: string
 *       expiry_month:
 *         type: string
 *       expiry_year:
 *         type: string
 *       is_credit_debit:
 *         type: integer
 *       is_primary:
 *         type: integer
 */


/**
 * @swagger
 * /gatewaydetails/addCardDetails:
 *   post:
 *     tags:
 *       - Gateway- Carddetails
 *     description: Add Card Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Carddetails
 *         description: Carddetails object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Carddetails'
 *     responses:
 *       200:
 *         description: Successfully updated
 */


router.post('/gatewaydetails/addCardDetails', gatewaydetail.addCardDetails)


/**
 * @swagger
 * /gatewaydetails/getCardDetails:
 *   get:
 *     tags:
 *       - Gateway- Carddetails
 *     description: Get Details of Card
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User Id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of Cards
 *         schema:
 *           $ref: '#/definitions/getCardDetails'
 * 
 */

router.get('/gatewaydetails/getCardDetails', gatewaydetail.getCardDetails)


/**
 * @swagger
 * /gatewaydetails/deleteCardDetails:
 *   delete:
 *     tags:
 *       - Gateway- Carddetails
 *     description: Remove Details of Card
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Remove Card Details
 *         schema:
 *           $ref: '#/definitions/deleteCardDetails'
 * 
 */

router.delete('/gatewaydetails/deleteCardDetails', gatewaydetail.deleteCardDetails)


/**
 * @swagger
 * definition:
 *   stripe:
 *     properties:
 *       user_id:
 *         type: string
 *       amount:
 *         type: string
 *       token:
 *         type: string
 *       currency_code:
 *         type: string
 *       email:
 *         type: string
 */

 /**
 * @swagger
 * /stripe/createStripeDetail:
 *   post:
 *     tags:
 *       - stripe
 *     description: Update stripe Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stripe
 *         description: stripe object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/stripe'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.post('/stripe/createStripeDetail',stripedetails.stripedetail);



/**
 * @swagger
 * definition:
 *   livestream:
 *     properties:
 *       stream_title:
 *         type: string
 *       location:
 *         type: string
 *       stream_description:
 *         type: string
 *       cover_image_path:
 *         type: string
 *       stream_as:
 *         type: string
 *       status_code:
 *         type: string
 *       created_date:
 *         type: string
 *       created_by:
 *         type: integer
 */

 /**
 * @swagger
 * /livestream/createLiveStream:
 *   post:
 *     tags:
 *       - livestream
 *     description: Create Live Stream
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: livestream
 *         description: livestream object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/livestream'
 *     responses:
 *       200:
 *         description: Successfully updated
 */

router.post('/livestream/createLiveStream',livestream.createLiveStream);

router.post('/livestream/updateLiveStreamStatus',livestream.updateLiveStream);

/**
 * @swagger
 * /customer/invoicedetails:
 *   get:
 *     tags:
 *       - invoicedetails
 *     summary: Get Invoice of user using user_id
 *     description: Get Details of invoice
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User Id
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: List of invoice
 *         schema:
 *           $ref: '#/definitions/invoicedetails'
 * 
 */

router.get('/customer/invoicedetails', invoicefinalDetails.invoiceDetail)

module.exports = router;